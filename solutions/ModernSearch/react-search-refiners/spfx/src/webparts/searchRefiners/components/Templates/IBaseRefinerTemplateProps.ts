import { IRefinementResult, IRefinementFilter, IRefinementValue } from "../../../../models/ISearchResult";
import RefinementFilterOperationCallback from "../../../../models/RefinementValueOperationCallback";

interface IBaseRefinerTemplateProps {

    /**
     * The refiner values to render
     */
    refinementResult: IRefinementResult;

    /**
     * Callback method to update selected filters
     */
    onFilterValuesUpdated: RefinementFilterOperationCallback;

    /**
     * Indicates if the template allows multi values selection
     */
    isMultiValue?: boolean;

    /**
     * Indicates if the current filters should be reset
     */
    shouldResetFilters: boolean;

    /**
     * A single filter value to reset
     */
    removeFilterValue?: IRefinementValue;
} 

export default IBaseRefinerTemplateProps;