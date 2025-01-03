import React from 'react'

function App() {
  return (
    <>
    <main className='py-10 bg-slate-400 w-100'>
      <h1 className='bg-red-300 font-medium '>your todos</h1>
      <p className="text-lg">ferramentas</p>
    </main>
      <section >
        <article className='w-50 h-14 bg-slate-800'>
          <div key={1} className='text-white hover:bg-slate-600'>div 1</div>
          <div>div 2</div>
        </article>
      </section>
    </>
  )
}

export default App