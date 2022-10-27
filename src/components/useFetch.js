import { useEffect, useState } from "react";

const useFetch = (request) => {
    let [data, setData] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
            fetch(request)
                .then((response) => {
                  //  console.log(response); // to check the response type true or false
                    if (response.ok === false) {
                        throw Error("Sorry.....!Data nout found, please try for different resourse");
                    } else {
                        return (response.json())
                    }
                })
                .then((data) => { setData(data);  })
                .catch((error) => { setError(error.message); })

    }, []);

    return { data, error }
}

export default useFetch;