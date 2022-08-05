function Loading() {
  return (
    <div className='flex items-center justify-center h-[67vh] w-screen'>
      <div className='loader bg-stone-500 mr-1 animate-bounce' />
      <div className='loader bg-stone-600 border border-blue-500 mr-1 animate-bounce200' />
      <div className='loader bg-stone-700 animate-bounce400' />
    </div>
  )
}

export default Loading
