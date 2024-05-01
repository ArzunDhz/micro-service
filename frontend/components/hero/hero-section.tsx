"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useEffect, useState } from "react"
import SuggestionBox from "./suggestion-box"

export function HeroSection()
{
  const [suggestionData, setSuggestionData] = useState<String[] | null>([])
  const [inputText, setInputText] = useState('')
  const url = process.env.NEXT_PUBLIC_PYTHON_SERVER_URL
  useEffect(() =>
  {
    const getAutoSuggestion = async () =>
    {
      try
      {
        const { data } = await axios.get(`${url}/autocomplete/${inputText}`)
        setSuggestionData(data.name)
        console.log(data.name)
      } catch (error: any)
      {
        console.log(error.message)
      }
    }
    getAutoSuggestion()
  }, [inputText])

  return (
    <section className="flex flex-col items-center justify-center h-[100vh] px-4 md:px-6">
      <div className="max-w-3xl text-center space-y-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Find Your Next Favorite Movie</h1>
        <div className="flex items-center flex-col gap-y-4 justify-center ">
          <div className=" flex w-full">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 h-12 px-4 rounded-md text-gray-900 "
              placeholder="Search for a movie..."
              type="text"
            />
          </div>
          <div className=" h-[40vh] w-full">
            {inputText.length > 0 && <SuggestionBox autoCompleteData={suggestionData} />}
          </div>
        </div>
      </div>
    </section>
  )
}