import {parseISO, format} from "date-fns"

export default function formartDate(date){
    var dateParse = parseISO(date)
    var date_formated = format(dateParse, "dd/MM/yyyy - kk:mm:ss")

    return date_formated
}