import { FC } from 'react';

import { Button } from '@mui/base';
import { SelectChangeEvent } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import CustomButton from '../StyledComponents/CustomButton';
import CustomSelect from '../StyledComponents/CustomSelect';

import cl from "./Sortings.module.scss"
import clsx from 'clsx';
import SortType from '../../constants/sortType';


interface ISortingProps {
    sort: SortType;
    setSort: (sortType: SortType) => void;
    setFiltersMenuOpen: (open: boolean) => void;
};

const Sortings: FC<ISortingProps> = ( { setSort, sort, setFiltersMenuOpen } ) => {

    const handleSortChange = (event: SelectChangeEvent<unknown>) => {
        const { value } = event.target;

        setSort(value as SortType);
    }

    const handleFiltersMenuOpen = () => {
        setFiltersMenuOpen(true);
    }
    
    return (
        <div className={cl["sortings"]}>
            <CustomButton 
                onClick={handleFiltersMenuOpen} 
                className={cl["sortings__filter-btn"]}
            >
                <span>Фільтр</span>
                <FilterAltOutlinedIcon />
            </CustomButton>
            <div className={cl["sorting-types"]}>
                <p className={cl["sorting-types__title"]}>
                    Сортування:
                </p>
                <Button 
                    onClick={() => setSort(SortType.POPULARITY)} 
                    className={clsx(cl["sorting-types__type"], {
                        [cl["sorting-types__type-active"]]: sort === SortType.POPULARITY
                    })}
                >
                    за популярністю
                </Button>
                <Button 
                    onClick={() => setSort(SortType.CHEAP)} 
                    className={clsx(cl["sorting-types__type"], {
                        [cl["sorting-types__type-active"]]: sort === SortType.CHEAP
                    })}
                >
                    дешевші
                </Button>
                <Button
                    onClick={() => setSort(SortType.EXPENSIVE)} 
                    className={clsx(cl["sorting-types__type"], {
                        [cl["sorting-types__type-active"]]: sort === SortType.EXPENSIVE
                    })}
                >                    
                    дорожчі
                </Button>
            </div>
            <div className={cl["sortings__select-container"]}>
                <CustomSelect 
                    className={""}
                    onChange={handleSortChange}
                    value={sort}
                    options={[
                        { id: 1, label: "За популярністю", value: 1},
                        { id: 2, label: "Дешевші", value: 2},
                        { id: 3, label: "Дорожчі", value: 3},
                    ]}
                />
            </div>
        </div>
    );
};

export default Sortings;