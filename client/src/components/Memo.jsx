import React, { memo, useEffect, useState } from "react";

const Memo = ({ contractInstance }) => {
  const [memos, setmemos] = useState([]);
  const { contract } = contractInstance;
  useEffect(() => {
    const callMemos = async () => {
      const memos = await contract.getMemos();
      console.log(memos);
      setmemos(memos);
    };
    contract && callMemos();
  }, [contract]);

  return (
    <>
      <div className="container-fluid">
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>Messages</h3>
        <table>
          <tbody>
            {memos.map((memo) => {
              const timestamp = Number(memo.timestamp);

              return (
                <tr>
                  <td
                    style={{
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                      color: "white",
                    }}
                  >
                    {memo.name}
                  </td>

                  <td
                    style={{
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                      color: "white",
                    }}
                  >
                    {memo.message}
                  </td>

                  <td
                    style={{
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                      color: "white",
                    }}
                  >
                    {new Date(memo.timestamp.value).toLocaleString()}
                  </td>

                  <td
                    className="container-fluid"
                    style={{
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "400px",
                      color: "white",
                    }}
                  >
                    {memo.from}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Memo;
