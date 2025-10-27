import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/SearchBar.css";

const SearchBar = () => {
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus();
        }
    }, [open]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        if (open) {
            window.addEventListener("mousedown", handleClickOutside);
        } else {
            window.removeEventListener("mousedown", handleClickOutside);
        }
        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <div ref={containerRef}>
            <div className="searchbar-toggle">
                <button
                    className="btn text-white"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle search bar"
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            <div className={`searchbar-container ${open ? "open" : ""}`}>
                <div className="container py-2">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const query = inputRef.current.value.trim();
                            if (query) {
                                console.log("Search:", query);
                                // TODO: integrate real search logic
                            }
                            setOpen(false);
                        }}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            className="form-control searchbar-input rounded-pill"
                            placeholder="Search the ACM UoBD Website..."
                            onBlur={(e) => {
                                if (!e.relatedTarget) setOpen(false);
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
