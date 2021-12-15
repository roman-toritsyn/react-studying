import { useState } from "react"

export const TextArea: React.FC = () => {
  const [textAreaText, setTextAreaText] = useState('');

  const handleChange = ((event: React.ChangeEvent<HTMLTextAreaElement>) => setTextAreaText(event.target.value));

  const clearTextArea = () => setTextAreaText('');

  return (
    <>
    <p>
      {textAreaText}
    </p>
    <textarea
      value={textAreaText}
      onChange={handleChange}
    />
    <button
      onClick={clearTextArea}
    >
      Clear TextArea
    </button>
    </>
  )
}
