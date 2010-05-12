(function($) {
    var invariant = $.cultures.invariant,
        standard = invariant.calendars.standard,
        culture = $.cultures["hi-IN"] = $.extend(true, {}, invariant, {
        name: "hi-IN",
        englishName: "Hindi (India)",
        nativeName: "हिंदी (भारत)",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],["रवि.","सोम.","मंगल.","बुध.","गुरु.","शुक्र.","शनि."]],
                months: [["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""],["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""]],
                AM: "पूर्वाह्न",
                PM: "अपराह्न",
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    });
    culture.calendar = culture.calendars.standard;
})(jQuery);