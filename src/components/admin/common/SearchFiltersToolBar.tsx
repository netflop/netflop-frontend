import {
  FilterOutlined,
  DownOutlined,
  UpOutlined,
  FileExcelOutlined
} from '@ant-design/icons';
import { Col, Row, Select, Space } from 'antd';
import Search from 'antd/es/input/Search';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import { tw } from '../../../common/utils/classUtil';
import PrimaryButton from './PrimaryButton';

type FiltersType = Record<string, string[]>;

type SearchType = {
  search?: string;
};

export type SearchFilters = Record<string, string[]> | Record<string, string>;

interface SearchFiltersToolBarProps {
  filters: FiltersType;
  isFilter?: boolean;
  isSearch?: boolean;
  placeholderSearch?: string;
  // eslint-disable-next-line no-unused-vars
  handelOnChange: (filtersSelected: SearchFilters) => void;
}
interface ItemProps {
  label: string;
  value: string;
}

export default function SearchFiltersToolBar(props: SearchFiltersToolBarProps) {
  const {
    isFilter = true,
    filters,
    isSearch = true,
    placeholderSearch = 'Search...',
    handelOnChange
  } = props;

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [searchValue, setSearchValue] = useState<SearchType>({});
  const [filtersSelected, setFiltersSelected] = useState<FiltersType>({});

  const renderFilter = (filters: FiltersType) => {
    const listFilter: JSX.Element[] = [];

    const handleFilterChange = (key: keyof FiltersType, newValue: string[]) => {
      setFiltersSelected((prevFiltersSelected) => ({
        ...prevFiltersSelected,
        [key]: newValue
      }));
    };

    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        const filterValues = filters[key as keyof FiltersType];
        const options: ItemProps[] = [];
        // eslint-disable-next-line no-unused-expressions
        !!filterValues &&
          filterValues.map((filterValue) => {
            options.push({
              label: `${filterValue}`,
              value: filterValue
            });
          });

        // Render filter container with label and values
        const filterSelect = (
          <div
            className='filter-item w-full mb-3 md:mb-0 md:w-60 md:mr-3'
            key={key}>
            <Title level={5}>Filter {key}</Title>
            <Select
              mode='multiple'
              style={{ width: '100%' }}
              options={options}
              value={filtersSelected[key as keyof FiltersType]}
              onChange={(newValue: string[]) => {
                handleFilterChange(key as keyof FiltersType, newValue);
              }}
              placeholder='Select Item...'
              maxTagCount='responsive'
            />
          </div>
        );
        listFilter.push(filterSelect);
      }
    }

    return listFilter;
  };
  const countFiltersSelected = (filtersSelected: FiltersType): number => {
    return Object.values(filtersSelected).reduce(
      (totalCount, values) => totalCount + values.length,
      0
    );
  };

  const numberFiltersSelected = countFiltersSelected(filtersSelected);

  return (
    <>
      <Row justify='end' align='middle'>
        <Col span={24} md={12}>
          <div className='flex space-x-2'>
            <PrimaryButton
              className='h-10 w-1/2 md:w-40'
              typographyClassName='text-[#00a815] text-base font-medium'
              variant='default'>
              <FileExcelOutlined /> Export file
            </PrimaryButton>
            <PrimaryButton
              className='h-10 w-1/2 md:w-40'
              typographyClassName='text-[#00a815] text-base font-medium'
              variant='default'>
              <FileExcelOutlined /> Import file
            </PrimaryButton>
          </div>
        </Col>
        <Col span={24} md={12}>
          <div className='flex justify-end my-3 space-x-2'>
            {isSearch && (
              <div className='flex-1'>
                <Search
                  className={tw('[&_.ant-btn]:leading-none')}
                  placeholder={placeholderSearch}
                  allowClear
                  size='large'
                  onSearch={(value: string) => {
                    setSearchValue({ search: value });
                    handelOnChange(
                      value
                        ? { search: value, ...filtersSelected }
                        : filtersSelected
                    );
                  }}
                />
              </div>
            )}
            {isFilter && (
              <div>
                <PrimaryButton
                  className='h-full w-30'
                  textClassName='text-base'
                  variant='primary'
                  onClick={() => setIsOpenFilter(!isOpenFilter)}>
                  <FilterOutlined /> Filters{' '}
                  {numberFiltersSelected !== 0
                    ? `(${numberFiltersSelected}) `
                    : ''}
                  {isOpenFilter ? (
                    <UpOutlined style={{ fontSize: '12px' }} />
                  ) : (
                    <DownOutlined style={{ fontSize: '12px' }} />
                  )}
                </PrimaryButton>
              </div>
            )}
          </div>
        </Col>
      </Row>

      {/* FILTER AREA */}
      {isFilter && isOpenFilter && (
        <div className='mb-5 p-5 w-full border border-gray-300 rounded'>
          <div className='flex flex-wrap flex-col md:flex-row'>
            <div className='flex flex-wrap filter-area'>
              {renderFilter(filters)}
            </div>
            <div className='flex items-end mt-3'>
              <Space>
                <PrimaryButton
                  className='w-20'
                  textClassName='text-base'
                  variant='cancel'
                  onClick={() => setFiltersSelected({})}>
                  Reset
                </PrimaryButton>
                <PrimaryButton
                  className='w-20'
                  textClassName={`
                    text-base
                    ${numberFiltersSelected === 0 && 'text-black'}
                  `}
                  variant='primary'
                  disabled={!(numberFiltersSelected > 0)}
                  onClick={() =>
                    handelOnChange(
                      searchValue.search
                        ? { ...searchValue, ...filtersSelected }
                        : filtersSelected
                    )
                  }>
                  Apply
                </PrimaryButton>
              </Space>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
