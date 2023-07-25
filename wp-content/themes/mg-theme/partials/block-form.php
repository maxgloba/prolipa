<div class="form__wrap">
  <h6><?php the_field('products_titleform'); ?></h6>
  <form class="form formAction form_block" method="POST" enctype="multipart/form-data" action="<?php echo !empty($formUrl) ? $formUrl : get_page_link(get_page_by_title('Страница благодарности'));?>">
    <input type="hidden" name="url" value="<?php echo $current_url; ?>">
    <div class="field">
      <label for="name">Ваше имя</label>
      <input type="text" name="name" id="name" placeholder="Например Иван" required />
    </div>
    <div class="field">
      <label for="name">Ваш номер</label>
      <input type="tel" name="phone" id="phone" placeholder="+7 | ( ___ ) ___ - __ - __" required />
    </div>
    <div class="field field-flex">
      <input type="checkbox" name="Agreement" id="success" required>
      <label for="success">Подтверждаю свои данные и даю своё согласие на их обработку.</label>
    </div>
    <button type="submit" class="btn btn-green"><span>Заказать звонок</span></button>
  </form>
</div>