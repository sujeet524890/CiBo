import React from "react";
import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const Main = () => {
  scrollTo(0,0)
  const [data, setData] = useState("");
  const [responcedata, setResponcedata] = useState("");
  const [language,setlanguage]=useState("")

  const hendelChange = (e) => {
    setData(e.target.value);
  };
  console.log(data);

  const hendelbutton = (item) => {
    setData((pre) => pre + (pre ? "," : " ") + item);
  };

  const ai = new GoogleGenAI({ apiKey:import.meta.env.VITE_GEMINI_API_KEY });
// console.log(import.meta.env.VITE_GEMINI_API_KEY)
  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Give  food recipi in step by step in short way " + data + "in" + language + "use emogies ,dont give  any answare not related to food and massge to end of inforamation thanku Sk",
    });
    // console.log(response.text);
    setResponcedata(response.text);
  }

  const onsubmit = () => {
   main();
  };
   const hendelClean =()=>{
    setData("");
   }
   const hendellanguag =(item)=>{
    setlanguage(item)
   }

  return (
    <div>
      <div className="min-h-screen bg-[#062011] p-6 flex flex-col gap-12  py-50 sm:py-35">
        {/* Section 1: Input + Button */}
        <section className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="text"
            value={data}
            placeholder="Type here..."
            className="border text-white border-gray-300 rounded-md px-4 py-2 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={hendelChange}
          />
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            onClick={() =>onsubmit()}
          >
            Submit
          </button>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() =>hendelClean()}
          >
           Clean
          </button>
          <button
            className={`${language.includes("Hindi") ? " bg-violet-500" : "bg-red-600"} text-white px-2 py-1 rounded-full hover:bg-blue-700 transition`}
            onClick={() =>hendellanguag("")}
          >
           Hindi
          </button>
          <button
            className={`${language.includes("English")?' bg-fuchsia-800':'bg-red-600'} text-white px-2 py-1 rounded-full hover:bg-blue-700 transition`}
            onClick={() =>hendellanguag("")}
          >
           English
          </button>
        </section>

        {/* Section 2: Collection of Buttons */}
        <section className="flex flex-col gap-4 items-center">
          {/* Row 1: 8 Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={` ${data.includes("Patato") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Patato");
              }}
            >
              Patato
            </button>
            <button
              className={` ${data.includes("Onion") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Onion");
              }}
            >
              Onion
            </button>
            <button
              className={` ${data.includes("Garlic") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Garlic");
              }}
            >
              Garlic
            </button>
            <button
              className={` ${data.includes("Chili") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Chili");
              }}
            >
              Chili
            </button>
            <button
              className={` ${data.includes("Tomato") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Tomato");
              }}
            >
              Tomato
            </button>
            <button
              className={` ${data.includes("Carrot") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Carrot");
              }}
            >
              Carrot
            </button>
            <button
              className={` ${data.includes("Mushroom") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Mushroom");
              }}
            >
              Mushroom
            </button>
            <button
              className={` ${data.includes("Peas") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Peas");
              }}
            >
              Peas
            </button>
            <button
              className={` ${data.includes("Ginger") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Ginger");
              }}
            >
              Ginger
            </button>
            <button
              className={` ${data.includes("Brinjal") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Brinjal");
              }}
            >
              Brinjal
            </button>
            <button
              className={` ${data.includes("Capsicum") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Capsicum");
              }}
            >
              Capsicum
            </button>
            <button
              className={` ${data.includes("Cauliflower") ? "bg-red-500" : "bg-blue-500"}  text-white px-4 py-2 rounded hover:bg-blue-600 transition`}
              onClick={() => {
                hendelbutton("Cauliflower");
              }}
            >
              Cauliflower
            </button>
          </div>

          {/* Row 2: 6 Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={` ${data.includes("Flours") ? "bg-red-500" : "bg-green-500"}  text-white px-4 py-2 rounded hover:bg-green-500 transition`}
              onClick={() => {
                hendelbutton("Flours");
              }}
            >
              Flours
            </button>
            <button
              className={` ${data.includes("Rice") ? "bg-red-500" : "bg-green-500"}  text-white px-4 py-2 rounded hover:bg-green-500 transition`}
              onClick={() => {
                hendelbutton("Rice");
              }}
            >
              Rice
            </button>
            <button
              className={` ${data.includes("Milk") ? "bg-red-500" : "bg-green-500"}  text-white px-4 py-2 rounded hover:bg-green-500 transition`}
              onClick={() => {
                hendelbutton("Milk");
              }}
            >
              Milk
            </button>
            <button
              className={` ${data.includes("Tea") ? "bg-red-500" : "bg-green-500"}  text-white px-4 py-2 rounded hover:bg-green-500 transition`}
              onClick={() => {
                hendelbutton("Tea");
              }}
            >
              Tea
            </button>
            <button
              className={` ${data.includes("Coffee") ? "bg-red-500" : "bg-green-500"}  text-white px-4 py-2 rounded hover:bg-green-500 transition`}
              onClick={() => {
                hendelbutton("Coffee");
              }}
            >
              Coffee
            </button>
            <button
              className={` ${data.includes("Egg") ? "bg-red-500" : "bg-green-500"}  text-white px-4 py-2 rounded hover:bg-green-500 transition`}
              onClick={() => {
                hendelbutton("Egg");
              }}
            >
              Egg
            </button>
            <button
              className={` ${data.includes("Cheese") ? "bg-red-500" : "bg-green-500"}  text-white px-4 py-2 rounded hover:bg-green-500 transition`}
              onClick={() => {
                hendelbutton("Cheese");
              }}
            >
              Cheese
            </button>
            <button
              className={` ${data.includes("Fish") ? "bg-red-500" : "bg-green-500"}  text-white px-4 py-2 rounded hover:bg-green-500 transition`}
              onClick={() => {
                hendelbutton("Fish");
              }}
            >
              Fish
            </button>
            <button
              className={` ${data.includes("Chicken") ? "bg-red-500" : "bg-green-500"}  text-white px-4 py-2 rounded hover:bg-green-500 transition`}
              onClick={() => {
                hendelbutton("Chicken");
              }}
            >
              Chicken
            </button>
          </div>

          {/* Row 3: 2 Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={` ${data.includes("PigeonPea") ? "bg-red-500" : "bg-yellow-500"}  text-white px-4 py-2 rounded hover:bg-yellow-500 transition`}
              onClick={() => {
                hendelbutton("PigeonPea");
              }}
            >
              Pigeon Pea
            </button>
            <button
              className={` ${data.includes("Spice") ? "bg-red-500" : "bg-yellow-500"}  text-white px-4 py-2 rounded hover:bg-yellow-500 transition`}
              onClick={() => {
                hendelbutton("Spice");
              }}
            >
              Spice
            </button>
            <button
              className={` ${data.includes("Salt") ? "bg-red-500" : "bg-yellow-500"}  text-white px-4 py-2 rounded hover:bg-yellow-500 transition`}
              onClick={() => {
                hendelbutton("Salt");
              }}
            >
              Salt
            </button>
            <button
              className={` ${data.includes("Jaggery") ? "bg-red-500" : "bg-yellow-500"}  text-white px-4 py-2 rounded hover:bg-yellow-500 transition`}
              onClick={() => {
                hendelbutton("Jaggery");
              }}
            >
              Jaggery
            </button>
            <button
              className={` ${data.includes("Suger") ? "bg-red-500" : "bg-yellow-500"}  text-white px-4 py-2 rounded hover:bg-yellow-500 transition`}
              onClick={() => {
                hendelbutton("Suger");
              }}
            >
              Suger
            </button>
            <button
              className={` ${data.includes("Ghee") ? "bg-red-500" : "bg-yellow-500"}  text-white px-4 py-2 rounded hover:bg-yellow-500 transition`}
              onClick={() => {
                hendelbutton("Ghee");
              }}
            >
              Ghee
            </button>
            <button
              className={` ${data.includes("Soybean Oil") ? "bg-red-500" : "bg-yellow-500"}  text-white px-4 py-2 rounded hover:bg-yellow-500 transition`}
              onClick={() => {
                hendelbutton("Soybean Oil");
              }}
            >
              Soybean Oil
            </button>
            <button
              className={` ${data.includes("Mustard Oil") ? "bg-red-500" : "bg-yellow-500"}  text-white px-4 py-2 rounded hover:bg-yellow-500 transition`}
              onClick={() => {
                hendelbutton("Mustard Oil");
              }}
            >
              Mustard{" "}
            </button>
          </div>
          <h2 className="font-bold mt-5 text-white">
            👉 “Make this and enjoy it.”
          </h2>
        </section>

        {/* Section 3: Textarea */}
        <section className="flex justify-center">
          <p
            placeholder="Write something..."
            className="overflow-scroll w-full sm:w-3/4 border border-gray-300 text-center  text-white rounded-md p-4 h-100 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {responcedata? responcedata:' Loading please wait....'}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Main;
