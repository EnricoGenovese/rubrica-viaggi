export default function Searchbar({ handleSearch }) {
    return (

        <div className="input-group w-25" >
            <div className="form-outline w-100" data-mdb-input-init>
                <label className="form-label text-center w-100" htmlFor="form1">Cerca viaggiatori</label>
                <input type="search" id="form1" className="form-control w-100" onChange={handleSearch} />

            </div>
        </div>
    )
} 