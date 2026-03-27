import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "workout"
})
export class WorkoutPipe implements PipeTransform {
    transform(value: string, format: string) {
        if (format == "address") 
            return "transformed string with address " + value;
        else
            return "Transformed string " + value;
    }
}