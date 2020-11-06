import React, { useState } from 'react';
import { Pagination } from 'antd';


function Pagniate({ dataCollection, setCurrentData, maxPerPage, children }) {

    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
        const min = page * maxPerPage;
        const max = min + maxPerPage;
        setCurrentData(dataCollection.slice(min, max));
        setCurrentPage(page);
    }

    return (
        <div>
            {children}
            <Pagination
                style={{ display: 'flex', marginBottom: 20 }}
                current={currentPage}
                onChange={onPageChange}
                total={dataCollection.length / maxPerPage || 1}
            />
        </div>
    );
}

export default Pagniate;
