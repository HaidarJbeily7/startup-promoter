"use client"
import {useState} from 'react';
import NavBar from "@/components/navbar";


export default function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [action, setAction] = useState('start_chat');

    async function sendMessage(e) {
        e.preventDefault();

        setMessages([...messages, {text: input, role: 'user'}]);
        setInput('');

        const response = await fetch('/api/process_request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({content: input, action: action}),
        });
        const data = await response.json();
        console.log(data)
        setMessages([...messages, {text: data.message, role: 'assistant'}]);
    }

    return (
        <>
            <NavBar/>

            <main className="flex w-full min-h-screen flex-col items-center gap-10 px-8 py-12 bg-secondary-color">

                <div className="p-4 bg-white shadow rounded-md max-w-5xl w-full ">
                    <div className="space-y-2">
                        {messages.map((message, index) => (
                            <div key={index}
                                 className={`flex items-end ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                                <div
                                    className={`rounded-lg px-4 py-2 ${message.role === 'assistant' ? 'bg-primary-color text-black' : 'bg-gray-300 text-black'}`}>
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={sendMessage} className="mt-4 flex items-center justify-between">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="border-2 border-gray-200 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                            placeholder="введите текст сообщения"
                        />

                        <button type="submit"
                                className="ml-2 bg-secondary-color text-black rounded-md px-4 py-2">отправить
                        </button>
                    </form>
                    <div className="p-2 text-center shadow-2xl border rounded-xl mt-2">
                        <label></label>
                        <select value={action} onChange={(e) => setAction(e.target.value)}>
                            <option value="title_gen">Придумать Название</option>
                            <option value="description_gen">Придумать описание</option>
                            <option value="slogan_gen">Придумать слоган</option>
                        </select>
                    </div>
                </div>

            </main>
        </>
    );
}
