"use client"
import type React from "react"
import { useRef, useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    
    if (form.current) {
      emailjs
        .sendForm("service_qya88ws", "template_q495u7n", form.current, {
          publicKey: "GScc64FM9t9x9MzFd",
        })
        .then(
          () => {
            console.log("SUCCESS!")
            setIsSuccess(true)
            form.current?.reset()
            setTimeout(() => setIsSuccess(false), 3000) // Reset success message after 3 seconds
          },
          (error) => {
            console.log("FAILED...", error.text)
          },
        )
        .finally(() => {
          setIsSending(false)
        })
    }
  }

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 bg-url[("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Contact with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>
      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            name="user_name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            placeholder="Enter your name"
            required
            disabled={isSending}
          />
          <input
            type="email"
            name="user_email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            placeholder="Enter your email"
            required
            disabled={isSending}
          />
        </div>
        <textarea
          name="message"
          rows={6}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 mb-6 bg-white"
          placeholder="Enter your message"
          required
          disabled={isSending}
        ></textarea>
        
        {isSuccess && (
          <div className="text-green-600 text-center mb-4 font-medium">
            Message sent successfully!
          </div>
        )}
        
        <button
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 ${
            isSending ? 'bg-gray-500' : 'bg-black/80 hover:bg-black hover:-translate-y-1'
          } text-white rounded-full mx-auto duration-500 transition-all`}
          type="submit"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Submit Now"}
        </button>
      </form>
    </div>
  )
}

export default Contact
