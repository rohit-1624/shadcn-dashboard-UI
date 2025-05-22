export const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "keyword",
    header: "Keyword",
  },
  {
    accessorKey: "words",
    header: "Words",
  },
  {
    accessorKey: "created",
    header: "Created",
  },
  {
    accessorKey: "publish",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`text-sm font-medium ${
          row.original.publish ? "text-green-600" : "text-red-500"
        }`}
      >
        {row.original.publish ? "Published" : "Draft"}
      </span>
    ),
  },
];
