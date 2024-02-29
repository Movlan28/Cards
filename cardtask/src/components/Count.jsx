const Count = () => {
    const [count, setCount] = useState(0);

    const handleIncreamnet = () =>{
        setCount(prevCount => prevCount +1)
        // setCount(count+1)
    }
};

return(
    <>
    <div className="h-screen flex justify-center items-center"
    ><button onClick={handleIncreamnet}>
        </button></div>
    </>
)