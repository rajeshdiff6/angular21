import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "message"
})
export class MessagePipe implements PipeTransform {
    transform(value: any, format?: any) {
        let msg = "transformed message" + value;

        if (format == "uppercase")
        {
            msg = msg.toUpperCase();
        }
        return msg;
    }
}