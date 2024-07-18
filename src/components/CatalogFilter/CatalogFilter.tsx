import { FC, useState } from 'react';
import clsx from 'clsx';

import { Button, Checkbox, FormControlLabel, Slider, Typography } from '@mui/material';

import CustomCollapse from '../StyledComponents/CustomCollapse';
import CustomInput from '../StyledComponents/CustomInput';

import ICatalogFilterProps from '../../types/ICatalogFilterProps';
import { ProductWeight } from '../../constants/productWeight';
import ProductAge from '../../constants/productAge';
import { MIN_RANGE_STEP } from '../../constants/globals';

import cl from "./CatalogFilter.module.scss";
import Overlay from '../Overlay/Overlay';
import FilterItem from '../FilterItem/FilterItem';


const CatalogFilter: FC<ICatalogFilterProps> = ({ filters, setFilters, clearFilters, open, setOpen }) => {
    const [openChosenOptionCollapse, setOpenChosenOptionCollapse] = useState(true);
    const [openProductWeightCollapse, setOpenProductWeightCollapse] = useState(true);
    const [openProductAgeCollapse, setOpenProductAgeCollapse] = useState(true);

    const productTypes = [
        { id: 1, value: ProductAge.PERENNIAL, title: "Багаторічний" },
        { id: 2, value: ProductAge.BIENNIAL, title: "Дворічний" },
        { id: 3, value: ProductAge.INDOOR, title: "Кімнатний" },
        { id: 4, value: ProductAge.ANNUAL, title: "Однорічний" },
    ];

    const productWeight = [
        { id: 1, value: ProductWeight.FIRST, title: "0.1" },
        { id: 2, value: ProductWeight.SECOND, title: "0.2" },
    ];
    
    const handleAgeChange = (value: number) => {
        const newSelectedProductAgeType = filters.selectedProductAgeType.includes(value)
            ? filters.selectedProductAgeType.filter(filter => filter !== value)
            : [...filters.selectedProductAgeType, value];
        setFilters({ ...filters, selectedProductAgeType: newSelectedProductAgeType });
    };

    const handleWeightChange = (value: number) => {
        const newSelectedProductWeightType = filters.selectedProductWeightType.includes(value)
            ? filters.selectedProductWeightType.filter(filter => filter !== value)
            : [...filters.selectedProductWeightType, value];
        setFilters({ ...filters, selectedProductWeightType: newSelectedProductWeightType });
    };

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
            const clamped = Math.min(newValue[0], 100 - MIN_RANGE_STEP);
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
        const newPrice = [...filters.price];
        newPrice[index] = event.target.value === '' ? 0 : Number(event.target.value);
        setFilters({ ...filters, price: newPrice as number[] });
    };

    const handleMenuClose = () => {
        setOpen(false);
    }

    const handleRemoveFilter = (value) => {
        setFilters({
          ...filters,
          selectedProductAgeType: filters.selectedProductAgeType.filter((item) => item !== value),
        });
      };
console.log(filters.price[1])
    return (
        <>
            <div className={cl["overlay-container"]}>
                <Overlay active={open} onClick={handleMenuClose}/>
            </div>
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
                        open={openChosenOptionCollapse}
                        setOpen={setOpenChosenOptionCollapse}
                        title={"Ви обрали"}
                    >
                        {
                            filters.selectedProductAgeType?.length !== 0
                            &&
                            <>
                                <p className={cl["choosen-title"]}>Вид:</p>
                                {
                                    filters.selectedProductAgeType.map((item) => {
                                        const productType = productTypes.find((type) => type.value === item);
                                            return (
                                                <FilterItem key={item} onClick={() => handleRemoveFilter(item)}>
                                                    {productType ? productType.title : ''}
                                                </FilterItem>
                                            );
                                    })
                                }
                            </> 
                        }
                        {
                            <>
                                {
                                    <>
                                        <p className={cl["choosen-title"]}>Ціна:</p>
                                        <FilterItem onClick={() => setFilters(prev => ({ ...prev, price: [0, 0]}))}>
                                            {`${filters.price[0]} - ${filters.price[1]} грн`}
                                        </FilterItem>
                                    </>
                                }
                                
                            </> 
                        }
                        <br/>
                        <Button className={cl["catalog-filter__clear-filters-btn"]} onClick={clearFilters}>
                            Очистити фільтри
                        </Button>
                    </CustomCollapse>

                    <CustomCollapse 
                        open={openProductAgeCollapse}
                        setOpen={setOpenProductAgeCollapse}
                        title={"Вид"}
                    >
                        <div className={cl["catalog-filter__checkboxes"]}>
                            {productTypes.map(checkbox => (
                                <FormControlLabel
                                    key={checkbox.id}
                                    control={
                                        <Checkbox
                                            checked={filters.selectedProductAgeType.includes(checkbox.value)}
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
                        open={openProductWeightCollapse}
                        setOpen={setOpenProductWeightCollapse}
                        title={"Грами"}
                    >
                        <div className={cl["catalog-filter__checkboxes"]}>
                            {productWeight.map(checkbox => (
                                <FormControlLabel
                                    key={checkbox.id}
                                    control={
                                        <Checkbox
                                            checked={filters.selectedProductWeightType.includes(checkbox.value)}
                                            onChange={() => handleWeightChange(checkbox.value)}
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

                    <div className={cl["price"]}>
                        <Typography variant='h6' className={cl["price__title"]}>Ціна, грн</Typography>
                        
                        <Slider
                            getAriaLabel={() => 'Price'}
                            value={filters.price}
                            onChange={handlePriceRangeChange}
                            valueLabelDisplay="auto"
                            disableSwap
                            color="success"
                        />

                        <div className={cl["price-inputs"]}>
                            <CustomInput
                                type='number'
                                className={cl["price-inputs__input"]}
                                value={filters.price[0]}
                                onChange={handleInputChange(0)}
                            />
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <span>-</span>
                            </div>

                            <CustomInput
                                type='number'
                                className={cl["price-inputs__input"]}
                                value={filters.price[1]}
                                onChange={handleInputChange(1)}
                            />
                            <Button 
                                className={cl["price-btn"]}
                                onClick={() => {}}
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