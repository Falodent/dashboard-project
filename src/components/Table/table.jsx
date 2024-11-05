import DataTable from "react-data-table-component";

const Table = () => {
  const columns = [
    {
      name: <p style={{ color: "#777777" }}>S/N</p>,
      width: "100px",
      selector: (_, index) => <p>{index + 1}</p>,
    },
    {
      name: "Name",
      selector: (row) => <p className="text-green-500">{row?.name}</p>,
    },
    {
      name: "Job",
      selector: (row) => (
        <p className="bg-gray-600">{row?.job === "Frontend Developer" ? "Frontend" : "Backend"}</p>
      ),
    },
  ];

  const data = [
    { name: "Olamide", job: "Frontend Developer" },
    { name: "David", job: "Backend Developer" },
  ];

  const styles = {
    headCells: {
      style: {
        color: "black",
        background: "#f5f5f5",
      },
    },
    cells: {
      style: {
        color: "red",
      },
    },
  };

  return (
    <DataTable
      title="List of Users"
      columns={columns}
      data={data}
      pagination={true}
      paginationPerPage={5}
      paginationRowsPerPageOptions={[5, 10, 15, 20]}
      selectableRows={true}
      customStyles={styles}
    />
  );
};
export default Table;
