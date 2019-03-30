let edge = require('electron-edge-js');

function sat(){
    
    var Utilitarios = edge.func({
        source: function () {/*
            async (dynamic input) =>
            {
                var Util = new ECFSatCFe.Utils.Utilitarios().F_ConvertHexa(input.str.ToString());
                return Util;
            }
        */},
        references: ["bin/SatCFe.dll"]
    });

    Utilitarios({str:'Este texto sera convertido.'}, function (error, result) {
        if (error) throw error;
        console.log(result);
    });
}