export default function Grid() {
  return (
    <div>
      <div className="flex justify-center space-x-5 border-b border-gray-200">
        <div className="w-120 h-66 flex items-center border border-t-0 border-b-0 border-gray-200">
          <div className="ml-[-1px] border-l-[1px] border-black pl-6">
            <h1 className="text-5xl font-medium tracking-tighter">
              Connected to everything that matters
            </h1>
          </div>
        </div>
        <div className="w-120 h-66 border border-t-0 border-b-0 border-gray-200  flex items-center">
          <div className="ml-[-1px] border-l-[1px] border-black pl-6">
            <p>
              Connect your tools is one click and keep everything--from transcripts to action
              items--flowing across your stack.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-5 border-b border-gray-200">
        <div className="w-120 h-76 border border-t-0 border-b-0 border-gray-200"></div>
        <div className="w-120 h-76 border border-t-0 border-b-0 border-gray-200"></div>
      </div>
    </div>
  )
}
