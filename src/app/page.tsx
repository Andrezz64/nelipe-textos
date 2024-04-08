

export default function Home() {
  return (
    <main className="flex justify-start items-center flex-col">
           <title>Home</title>
      <h1 className="mt-[10rem]">Ainda estou programando essa parte</h1>
      <h2>Apesar de ser a home ...</h2>
      <img width={300} height={300} className="rounded-full mt-5" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG81cXdrM3R5MnFjeW50MnR3OTkzenY4YTN5bW5lOTExcGRnemZxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zDXrOAcVnSbsJdsJdm/giphy.gif" alt="" />
      <h1>Veja os textos postados até o momento</h1>
      <a href="/textos" className="bg-[#d32b0d] p-2 rounded-lg mt-5">Textos diversos</a>
    </main>
    
  );
}
