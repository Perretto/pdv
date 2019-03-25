function save(table){
    iziToast.question({
        timeout: 20000,
        close: false,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: '',
        message: 'Deseja gravar este registro?',
        position: 'center',
        buttons: [
            ['<button><b>SIM</b></button>', function (instance, toast) {
     
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');    


                var data = getFormData($("form"));
                //var table = "produtos";

                gravar(table, data,function(data){
                    if(data){
                        if(data.length > 0){
                            if(data[0].lastID || data[0].lastID == 0){
                                $("#id").val(data[0].lastID);
                                iziToast.success({
                                    title: '',
                                    message: 'Registro salvo com sucesso!',
                                });
                            }
                        }
                    }   
                })
                }, true],
                        ['<button>NÃO</button>', function (instance, toast) {
                
                            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                
                        }],
                    ],
                    onClosing: function(instance, toast, closedBy){
                        console.info('Closing | closedBy: ' + closedBy);
                    },
                    onClosed: function(instance, toast, closedBy){
                        console.info('Closed | closedBy: ' + closedBy);
                    }
                });    
    
}

function deleteP(table){
    var id = $("#id").val();
    if(!id){
        
        iziToast.warning({
            title: '',
            message: 'Edite um registro antes de deletar!',
        });
        return;
    }


    iziToast.question({
        timeout: 20000,
        close: false,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: '',
        message: 'Deseja deletar este registro?',
        position: 'center',
        buttons: [
            ['<button><b>SIM</b></button>', function (instance, toast) {
     
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');  

        ondelete(table, id, function(data){
            if(data){
                if(data.length == 0){
                    novo()
                    iziToast.success({
                        title: '',
                        message: 'Registro deletado com sucesso!',
                    });                
                }
            }      
        })
    }, true],
    ['<button>NÃO</button>', function (instance, toast) {

        instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

    }],
    ],
    onClosing: function(instance, toast, closedBy){
    console.info('Closing | closedBy: ' + closedBy);
    },
    onClosed: function(instance, toast, closedBy){
    console.info('Closed | closedBy: ' + closedBy);
    }
    });      

                
}

function novo(){
    var data = $("form input");
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if($(element).attr("type") == "checkbox"){
            $(element).attr("checked", false)
            $(element).prop("checked", false)
            $(element).val(false);
            $(element).removeProp("checked")
        }else{
            $(element).val("");
        }      
    }
    imagensPadrao()
    $("textarea").val("");
    $("select").val("");
}



function voltar(){
    window.location.assign("http://" + window.location.host)
}

function checkchange(element){
    $(element).val($(element).is(":checked"))

    if($(element).is(":checked")){
        //$(element).attr('checked', 'checked')
        $(element).attr("checked", true)
        $(element).prop("checked", true)
    }else{
        //$(element).removeProp("checked")
        $(element).attr("checked", false)
        $(element).prop("checked", false)
    }
    
}

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });



    return indexed_array;
}