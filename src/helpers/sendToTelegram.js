export const sendToTelegram = async (formData) => {
    const { name, tel, email, comment } = formData;

    let text = "";
    if (comment && email) {
        text = `Шановний EyeDetect, ${name} написав повідомлення: "${comment}" та для зворотнього зв'язку залишив номер телефону ${tel} та електронну адресу ${email}`;
    } else if (comment && !email) {
        text = `Шановний EyeDetect, ${name} написав повідомлення: "${comment}" та для зворотнього зв'язку залишив номер телефону ${tel}`;
    } else if (!comment && email) {
        text = `Шановний EyeDetect, ${name} для зворотнього зв'язку залишив номер телефону ${tel} та електронну адресу ${email}`;
    }
    else
        text = `Шановний EyeDetect, ${name} залишив для зворотнього зв'язку номер телефону ${tel}`


    try {
        const response = await fetch(process.env.TELEGRAM_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
            body: JSON.stringify({
                chat_id: process.env.TELEGRAM_CHAT_ID,
                text,
            }),
        });

        if (response.ok) {
            console.log("To telegram sent:", formData);
            console.log("text", text)

            // here you can show a message for user that everything was successful
            // toast.success("Ваше повідомлення успішно відправлено");
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error);
        console.log("error");
        // here you can show a message for user that something went wrong
        // toast.error("Щось пішло не так. Спробуйте ще раз.");
    }
};