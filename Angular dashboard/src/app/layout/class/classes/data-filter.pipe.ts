import * as _ from "lodash";
 import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.Class.indexOf(query) > -1);
        }
        return array;
    }
}
//  @Pipe({name: 'dataFilter'})
//     export class DataFilterPipe implements PipeTransform {
//       transform(categories: any, searchText: any): any {
//          if(searchText == null) return categories;
//         return categories.filter(function(category){
//           return category.Category.toLowerCase().indexOf(searchText) > -1;
//         })
//       }
//     }