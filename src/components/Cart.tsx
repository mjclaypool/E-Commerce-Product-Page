export default function Cart() {
  return (
    <div className="absolute top-20 right-2 xl:top-24 xl:right-24 w-[360px] h-[256px] font-kumbhSans bg-n-white shadow-2xl rounded-lg z-40">
      <h2 className="font-bold text-n-v-dark-blue p-6">Cart</h2>
      <div className="border-b-[1px]"/>
      <p className="font-bold text-center text-n-dark-grey-blue my-16">Your cart is empty.</p>
    </div>
  )
}