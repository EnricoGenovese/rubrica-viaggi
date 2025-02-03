export default function Searchbar({ handleSearch }) {
    return (

        <div className="input-group w-100 w-md-50 " >
            <div className="form-outline w-100 w-md-50" data-mdb-input-init>
                <label className="form-label text-center text-white" htmlFor="form1"></label>
                <input type="search" id="form1" className="form-control w-100 w-md-50" placeholder="Cerca viaggiatori" onChange={handleSearch} />
            </div>
        </div>
    )
} 