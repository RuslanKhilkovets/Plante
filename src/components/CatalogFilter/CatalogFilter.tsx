import { FC, useState } from 'react';
import clsx from 'clsx';

import { Button, Checkbox, FormControlLabel, Slider, Typography } from '@mui/material';

import CustomCollapse from '../StyledComponents/CustomCollapse';
import CustomInput from '../StyledComponents/CustomInput';

import ICatalogFilterProps from '../../types/ICatalogFilterProps';
import { MIN_RANGE_STEP } from '../../constants/globals';
import filterProductTypes from '../../constants/filterProductTypes';
import filterProductWeight from '../../constants/filterProductWeight';

import cl from "./CatalogFilter.module.scss";
import Overlay from '../Overlay/Overlay';
import FilterItem from '../FilterItem/FilterItem';


const CatalogFilter: FC<ICatalogFilterProps> = ({ filters, setFilters, clearFilters, open, setOpen, onFilter }) => {
    const [openCollapses, setOpenCollapses] = useState({
        optionCollapse: true,
        productWeightCollapse: true,
        productAgeCollapse: true,
    })

    const handleFilterChange = (key: 'productAgeTypes' | 'productWeightTypes', value: number) => {
        const newSelectedTypes = (filters[key] as number[]).includes(value)
            ? filters[key].filter((filter: number) => filter !== value)
            : [...filters[key], value];
        setFilters({ ...filters, [key]: newSelectedTypes });
    };
    const handleAgeChange = (value: number) => handleFilterChange('productAgeTypes', value);
    const handleWeightChange = (value: number) => handleFilterChange('productWeightTypes', value);

    const handlePriceRangeChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
      ) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (newValue[1] - newValue[0] < MIN_RANGE_STEP) {
          if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 10 - MIN_RANGE_STEP);
            setFilters({ ...filters, price: [clamped, clamped + MIN_RANGE_STEP] });
          } else {
            const clamped = Math.max(newValue[1], MIN_RANGE_STEP);
            setFilters({ ...filters, price: [clamped - MIN_RANGE_STEP, clamped] });
          }
        } else {
            setFilters({ ...filters, price: newValue as number[] });
        }
    };

    const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const newPrice = [...filters.price];

        if(isNaN(+value)){
            return;
        }

        newPrice[index] = value === '' ? 0 : +value;
        setFilters({ ...filters, price: newPrice as number[] });
    };

    const handleMenuClose = () => {
        setOpen(false);
    }

    const handleRemoveFilter = (value: any) => {
        setFilters({
          ...filters,
          productAgeTypes: filters.productAgeTypes.filter((item) => item !== value),
        });
    };

    return (
        <>
            <Overlay active={open} onClick={handleMenuClose}/>
            <div className={clsx(cl["catalog-filter"], {
                [cl["catalog-filter_active"]]: open,
            })}>
                <Button 
                    className={cl["catalog-filter__title"]}
                    onClick={handleMenuClose}
                >
                    Фільтр
                </Button>
                <div>
                    <CustomCollapse 
                        open={openCollapses.optionCollapse}
                        setOpen={() => setOpenCollapses((prev: any) => ({ ...prev, optionCollapse: !openCollapses.optionCollapse}))}
                        title={"Ви обрали"}
                    >
                        {
                            filters.productAgeTypes?.length !== 0
                            &&
                            <>
                                <p className={cl["choosen-title"]}>Вид:</p>
                                {
                                    filters.productAgeTypes.map((item) => {
                                        const productType = filterProductTypes.find((type) => type.value === item);
                                            return (
                                                <FilterItem key={item} onClick={() => handleRemoveFilter(item)}>
                                                    {productType ? productType.title : ''}
                                                </FilterItem>
                                            );
                                    })
                                }
                                    <br/>
                                    <Button className={cl["catalog-filter__clear-filters-btn"]} onClick={clearFilters}>
                                        Очистити фільтри
                                    </Button>
                            </> 
                        }
                      
                    </CustomCollapse>

                    <CustomCollapse 
                        open={openCollapses.productAgeCollapse}
                        setOpen={() => setOpenCollapses((prev: any) => ({ ...prev, productAgeCollapse: !openCollapses.productAgeCollapse}))}
                        title={"Вид"}
                    >
                        <div className={cl["catalog-filter__checkboxes"]}>
                            {filterProductTypes.map(checkbox => (
                                <FormControlLabel
                                    key={checkbox.id}
                                    control={
                                        <Checkbox
                                            checked={filters.productAgeTypes.includes(checkbox.value)}
                                            onChange={() => handleAgeChange(checkbox.value)}
                                            value={checkbox.value}
                                            color="success"
                                            disableRipple
                                            sx={{
                                                transform: "scale(1.5)",
                                                px: 2
                                            }}
                                        />
                                    }
                                    label={checkbox.title}
                                />
                            ))}
                        </div>
                    </CustomCollapse>

                    <CustomCollapse 
                        open={openCollapses.productWeightCollapse}
                        setOpen={() => setOpenCollapses((prev: any) => ({ ...prev, productWeightCollapse: !openCollapses.productWeightCollapse}))}
                        title={"Грами"}
                    >
                        <div className={cl["catalog-filter__checkboxes"]}>
                            {filterProductWeight.map(checkbox => (
                                <FormControlLabel
                                    key={checkbox.id}
                                    control={
                                        <Checkbox
                                            checked={filters.productWeightTypes.includes(checkbox.value)}
                                            onChange={() => handleWeightChange(checkbox.value)}
                                            value={checkbox.value}
                                            color="success"
                                            disableRipple
                                            sx={{
                                                transform: "scale(1.5)",
                                                px: 2,
                                                borderColor: "green"
                                            }}
                                        />
                                    }
                                    label={checkbox.title}
                                />
                            ))}
                        </div>
                    </CustomCollapse>

                    <div className={cl["price"]}>
                        <Typography variant='h6' className={cl["price__title"]}>Ціна, грн</Typography>
                        
                        <Slider
                            getAriaLabel={() => 'Price'}
                            value={filters.price}
                            onChange={handlePriceRangeChange}
                            valueLabelDisplay="auto"
                            disableSwap
                            color="success"
                            max={10}
                            sx={{
                                '& .MuiSlider-thumb': {
                                    backgroundColor: 'white', 
                                    border: '2px solid green', 
                                  },
                                  '& .MuiSlider-track': {
                                    color: 'green',
                                  },
                                  '& .MuiSlider-rail': {
                                    color: '#d3d3d3', 
                                  },
                            }}
                        />

                        <div className={cl["price-inputs"]}>
                            <CustomInput
                                className={cl["price-inputs__input"]}
                                value={filters.price[0]}
                                onChange={handleInputChange(0)}
                            />
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <span>-</span>
                            </div>

                            <CustomInput
                                className={cl["price-inputs__input"]}
                                value={filters.price[1]}
                                onChange={handleInputChange(1)}
                            />
                            <Button 
                                className={cl["price-btn"]}
                                onClick={onFilter}
                            >
                                OK
                            </Button>
                        </div>
                    </div>
                </div>
                
                
                <Button 
                    onClick={() => clearFilters()} 
                    className={clsx(cl["reset-btn"], cl["price-btn"])}
                >
                    Скинути фільтри
                </Button>
            </div>
        </>
    );
};

export default CatalogFilter;