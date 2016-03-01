jQuery( function($)
{
	$.msg = function (key)
	{
		var m = new Array();

		m["mensagem.usuarioNaoLogado"] = "Você deve realizar login para continuar!";
		m["mensagem.atencao.titulo"] = "ATENÇÃO!";
		m["mensagem.erro.titulo"] = "ALGO DEU ERRADO!";
		
		m["mensagem.timeout"] = "Sua sessão expirou!";
		m["mensagem.remocao.sucesso"] = "O registro foi removido com sucesso.";
		m["mensagem.sucesso.titulo"] = "SUCESSO!";
		
		m["mensagem.sucesso.descricao"] = "O registro foi salvo com sucesso.";
		m["mensagem.logout"] = "Você saiu do sistema.";
		m["mensagem.informacao.titulo"] = "INFORMAÇÃO!";
		
		m["mensagem.erro.logar"] = "O login e a senha que você digitou não coincidem.";
	
		var msg = m[key];
	
		msg = (msg == undefined) ? ('??[' + key + ']??') : msg;
	
		return msg;
	}
});