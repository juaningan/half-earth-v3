import { union, sumBy } from 'lodash';
import { createSelector, createStructuredSelector } from 'reselect';

export const selectCellData = ({ gridCellData }) => gridCellData.data || null;

export const getCellSpecies = createSelector(selectCellData, cellData => {
  if (!cellData) return null;
  const species = cellData.map(cell => cell.FOCAL_SPP);
  return union(species);
})

export const getHumanPressures = createSelector(
  [selectCellData],
  cellData=> {
    if (!cellData) return null;
    const pressures = cellData.reduce((acc, current) => {
      return {
        ...acc,
        [current.CELL_ID]: {
          rainfed: current.RAINFED,
          urban: current.URBAN,
          irrigated: current.AGRICULTUR
        }
        }
    }, {});
    const pressuresValues = Object.values(pressures)
    const gridCellsLength = Object.keys(pressures).length;
    const rainfed = sumBy(pressuresValues, 'rainfed') / gridCellsLength;
    const irrigated = sumBy(pressuresValues, 'irrigated') / gridCellsLength;
    const urban = sumBy(pressuresValues, 'urban') / gridCellsLength;
    const pressureFree = 100 - (rainfed + irrigated + urban)
    return {
      rainfed,
      irrigated,
      urban,
      pressureFree
    }
  }
)

export default createStructuredSelector({
  cellSpecies: getCellSpecies,
  humanPressures: getHumanPressures
})