import { DataTable } from "@/components/data-table"
import { columns } from "@/components/ui/columns"
import { dummyData } from "../data/dummyData"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight"></h2>
      <DataTable columns={columns} data={dummyData} />
    </div>
  )
}
