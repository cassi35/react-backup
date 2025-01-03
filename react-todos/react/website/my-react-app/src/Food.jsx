
export default function Food() {
    var comidas = ['macao','laranja','limao']
  return (
    <>
    <article>
      {comidas.map((comida,index) => (<p key={index}>{comida}</p>))}
    </article>
    </>
  )
}
