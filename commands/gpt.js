const axios = require('axios');

module.exports = {
    name: 'gpt',
    run: async (client, messageOrInteraction, args, url, db) => {
        const isInteraction = messageOrInteraction.isCommand?.();
        let prompt;

        if (isInteraction) {
            prompt = messageOrInteraction.options.getString('prompt');
        } else {
            prompt = args.join(' ');
        }

        if (!prompt) {
            return messageOrInteraction.reply
                ? messageOrInteraction.reply('no question??')
                : messageOrInteraction.channel.send('no question??');
        }

        // Các models để thử lần lượt
        const models = [
            'EleutherAI/gpt-neo-1.3B', // cực kỳ tốt
            'EleutherAI/gpt-j-6B',                  // backup nhẹ
            'bigscience/bloom-560m'                                // fallback nhẹ nhất
        ];

        let answer = null;
        let usedModel = null;

        for (const model of models) {
            try {
                // Gửi tin nhắn "thonking..." kèm tên model
                if (!answer) {
                    if (isInteraction) {
                        await messageOrInteraction.reply({ content: `thonking... [model: **${model}**]`, fetchReply: true });
                    } else {
                        await messageOrInteraction.reply(`thonking... [model: **${model}**]`);
                    }
                }

                const response = await axios.post(
                    `https://api-inference.huggingface.co/models/${model}`,
                    {
                        inputs: prompt,
                        parameters: {
                            max_new_tokens: 500,
                            temperature: 0.7
                        }
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.HF_TOKEN}`,
                        }
                    }
                );

                if (response.data.error) {
                    console.warn(`Model ${model} error: ${response.data.error}`);
                    continue; // Nếu lỗi, thử model tiếp
                }

                answer = response.data.generated_text;
                usedModel = model;
                if (answer) break; // Nếu có câu trả lời thì dừng lại
            } catch (error) {
                console.error(`Error using model ${model}:`, error.message);
                continue;
            }
        }

        if (!answer) {
            answer = "woopsies daisies some fuckery happened in the process sowwyyyyy.";
        }

        if (answer.length > 4000) {
            answer = answer.slice(0, 3997) + '...'; // Discord giới hạn ~4000 với interaction
        }

        // Hiệu ứng gõ từng chữ
        async function typeOut(content, target) {
            let typed = '';
            for (let i = 0; i < content.length; i++) {
                typed += content[i];
                if (i % 10 === 0 || i === content.length - 1) { // update mỗi 10 kí tự để đỡ lag
                    await target.edit(typed);
                }
                await new Promise(resolve => setTimeout(resolve, 25)); // delay 25ms mỗi kí tự
            }
        }

        if (isInteraction) {
            const sent = await messageOrInteraction.fetchReply();
            await typeOut(answer, sent);
        } else {
            const sent = await messageOrInteraction.channel.messages.fetch({ after: 1 }).then(messages => messages.first());
            if (sent) {
                await typeOut(answer, sent);
            }
        }
    }
};