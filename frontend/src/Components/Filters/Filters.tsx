import React from "react";
import styles from "./Filters.module.scss";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
    setMinPrice,
    setMaxPrice,
    setSortBy,
    setShowDisconted,
} from "../../store/features/filtersSlice";

interface AllProducstProps {
    visibility: boolean;
}

const Filters: React.FC<AllProducstProps> = ({ visibility }) => {
    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.filters);

    return (
        <div className={styles.content}>
            <div className={styles.price}>
                <label>Price</label>
                <input
                    type="number"
                    value={filters.minPrice || ""}
                    onChange={(e) => {
                        dispatch(
                            setMinPrice(
                                e.target.value ? Number(e.target.value) : null
                            )
                        );
                    }}
                    placeholder="from"
                />
                <input
                    type="number"
                    value={filters.maxPrice || ""}
                    onChange={(e) => {
                        dispatch(
                            setMaxPrice(
                                e.target.value ? Number(e.target.value) : null
                            )
                        );
                    }}
                    placeholder="to"
                />
            </div>
            {visibility && (
                <div className={styles.discont}>
                    <input
                        type="checkbox"
                        checked={filters.showDisconted}
                        onChange={(e) =>
                            dispatch(setShowDisconted(e.target.checked))
                        }
                    ></input>
                    <label>Discounted items</label>
                </div>
            )}

            <div className={styles.sort}>
                <label>Sorted</label>
                <select
                    value={filters.sortBy || ""}
                    onChange={(e) =>
                        dispatch(
                            setSortBy(
                                e.target.value as
                                    | "priceAsc"
                                    | "priceDesc"
                                    | null
                            )
                        )
                    }
                >
                    <option value="">by default</option>
                    <option value="priceAsc">price: low to high</option>
                    <option value="priceDesc">price: high to low</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
