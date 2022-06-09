$(function () {
  $('#link_reg').click(() => {
    $('.login-box').hide();
    $('.reg-box').show();
  });

  $('#link_login').click(() => {
    $('.login-box').show();
    $('.reg-box').hide();
  });

  const form = layui.form;

  form.verify({
    password: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],

    repwd: (value) => {
      const pwd = $('.reg-box [name=password]').val();

      console.log(pwd,value);

      if (pwd !== value) return '两次密码不一样';
    },
  });

  $('#form_reg').submit((e) => {
    e.preventDefault();
  });
});
