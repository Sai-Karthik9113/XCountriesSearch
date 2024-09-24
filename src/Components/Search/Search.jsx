import React, { useState } from "react";
import Card from "../Cards/Card";
import styles from './Search.module.css';

const Navbar = ({ data }) => {
    const [searchInput, setSearchInput] = useState('');
    // const [debounceQuery, setDebounceQuery] = useState('');

    const handleSearch = (event) => {
        setSearchInput(event.target.value);
    }
    const filteredData = data.filter((val) => {
        return val.name.common.toLowerCase().includes(searchInput.toLowerCase());
    });

    // const filteredData = data.filter((val) => {
    //     return val.name.common.toLowerCase().includes(debounceQuery.toLowerCase());
    // });

    // useEffect(() => {
    //     const handler = setTimeout(() => {
    //         setDebounceQuery(searchInput);
    //     }, 300);

    //     return () => {
    //         clearTimeout(handler);
    //     }
    // }, [searchInput]);

    return (
        <>
            <div className={styles.navbarContainer}>
                <input 
                    type="text" 
                    placeholder='Search for countries...' 
                    style={{ width: '50%', height: '70%', paddingLeft: '10px' }}
                    onChange={handleSearch}
                />
            </div>
            {
                filteredData ? (
                    <Card data={filteredData}/>
                ) : (
                    <Card data={data}/>
                )
            }

        </>

    )
};

export default Navbar;