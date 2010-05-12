(function($) {
    var invariant = $.cultures.invariant,
        standard = invariant.calendars.standard,
        culture = $.cultures["th-TH"] = $.extend(true, {}, invariant, {
        name: "th-TH",
        englishName: "Thai (Thailand)",
        nativeName: "ไทย (ไทย)",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "฿"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "ThaiBuddhist",
                days: [["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."]],
                months: [["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม",""],["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.",""]],
                eras: [{"name":"พ.ศ.","start":null,"offset":-543}],
                twoDigitYearMax: 2572,
                patterns: {
                    d: "d/M/yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."]],
                months: [["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม",""],["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.",""]],
                patterns: {
                    d: "d/M/yyyy",
                    D: "\u0027วัน\u0027dddd\u0027ที่\u0027 d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "\u0027วัน\u0027dddd\u0027ที่\u0027 d MMMM yyyy H:mm",
                    F: "\u0027วัน\u0027dddd\u0027ที่\u0027 d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    });
    culture.calendar = culture.calendars.standard;
})(jQuery);