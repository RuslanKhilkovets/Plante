import { FC } from 'react';
import clsx from 'clsx';

import { Button } from '@mui/base';
import { SelectChangeEvent } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import CustomButton from '../../UI/Button/CustomButton';
import CustomSelect from '../../UI/Select/CustomSelect';

import SortType from '../../../constants/sortType';
import ISortingProps from '../../../types/ISortingProps';
import catalogSortingOptions from '../../../constants/catalogSortingOptions';

import cl from "./Sortings.module.scss"


const Sortings: FC<ISortingProps> = ({ setSort, sort, setFiltersMenuOpen }) => {
    const handleSortChange = (event: SelectChangeEvent<unknown>) => {
        const { value } = event.target;

        setSort(value as SortType);
    };

    const handleFiltersMenuOpen = () => {
        setFiltersMenuOpen(true);
    };

    return (
        <div className={cl.sortings}>
            <CustomButton onClick={handleFiltersMenuOpen} className={cl["sortings__filter-btn"]}>
                <span>Фільтр</span>
                <FilterAltOutlinedIcon />
            </CustomButton>
            <div className={cl["sorting-types"]}>
                <p className={cl["sorting-types__title"]}>Сортування:</p>
                {catalogSortingOptions.map(option => (
                    <Button
                        key={option.id}
                        onClick={() => setSort(option.value)}
                        className={clsx(cl["sorting-types__type"], {
                            [cl["sorting-types__type-active"]]: sort === option.value
                        })}
                    >
                        {option.label.toLowerCase()}
                    </Button>
                ))}
            </div>
            <div className={cl["sortings__select-container"]}>
                <CustomSelect 
                    onChange={handleSortChange}
                    value={sort}
                    options={catalogSortingOptions}
                />
            </div>
        </div>
    );
};

export default Sortings;