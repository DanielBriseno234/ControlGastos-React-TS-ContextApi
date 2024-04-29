import { formatCurrency } from "../helpers"

export type AmounDisplayProps ={
    label?: string
    amount: number
}

export default function AmountDisplay({ label, amount }: AmounDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
      {label && `${label}: `}
      <span className="font-black text-black">{formatCurrency( amount )}</span>
    </p>
  )
}
