<template>
  <div class="cs-view cs-view-content">

    <h1>{{ msg }}</h1>

    <ul>
      <li>name: {{$store.state.user.name}}</li>
      <li>email: {{$store.state.user.email}}</li>
      <li>phone: {{$store.state.user.phone}}</li>
      <li>picture: {{$store.state.user.picture}}</li>
    </ul>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc nibh, pharetra ut magna non, mollis imperdiet ipsum. Duis ullamcorper mattis felis, et bibendum eros mollis in. Donec tristique leo egestas, porta nibh eget, rhoncus ipsum. Integer ex nunc, vestibulum id odio ut, auctor congue nibh. Vestibulum mauris nisi, sollicitudin in elit et, tempus blandit metus. Ut blandit tortor non lorem varius, et blandit velit pulvinar. Cras lorem massa, mollis a accumsan vitae, vulputate sed quam. Praesent ante lacus, sollicitudin a ipsum at, dictum blandit purus. Donec condimentum lorem tortor, eu malesuada odio mattis eu. Curabitur tincidunt nulla a diam elementum dictum. Fusce dignissim egestas est et tempor. Nunc vestibulum, nibh aliquet fermentum tempor, ipsum odio feugiat mauris, vel cursus neque urna in quam. Suspendisse a velit sapien. Mauris feugiat risus ut metus venenatis, non porta nisl aliquam. Vestibulum malesuada magna nunc.
    </p>
    <p>
      Etiam iaculis elementum elit id placerat. In vestibulum odio sodales augue dictum, eget aliquet odio accumsan. Aenean vel felis imperdiet, vestibulum justo faucibus, vestibulum libero. Ut magna libero, efficitur vitae ligula dapibus, lobortis tempus mauris. Curabitur vulputate in augue id sodales. Integer finibus, lacus ac luctus elementum, turpis felis pellentesque velit, ac faucibus est ante sed mi. Aliquam auctor egestas fermentum. Proin bibendum mi velit, eleifend lacinia metus venenatis mattis. Vivamus sed diam at nisl hendrerit finibus a at sapien. Integer ac posuere enim, eget euismod neque. Maecenas ligula magna, suscipit nec dignissim at, suscipit vel massa. Cras vel erat vel diam gravida sodales.
    </p>
    <p>
      Sed fermentum, turpis at tristique accumsan, purus augue cursus quam, ut interdum quam mi sit amet nulla. Sed placerat feugiat dapibus. Phasellus molestie neque eu viverra ornare. Suspendisse ut ante nec lectus faucibus congue. Maecenas vitae augue ex. Maecenas volutpat aliquam massa eget pulvinar. Nulla sollicitudin quis nisl non gravida. Proin nec imperdiet arcu, fermentum feugiat ex. Fusce tempus purus magna, et auctor mauris luctus quis. In risus lectus, interdum at tristique posuere, fringilla ut nisi. Etiam interdum eros enim, ut ornare sapien pulvinar et. Pellentesque in dolor sed ipsum tincidunt ullamcorper.
    </p>
    <p>
      Maecenas aliquet ex eu enim dapibus sodales. Donec ultrices quis odio non sagittis. Phasellus tellus est, tincidunt et nisl eleifend, aliquet sodales urna. Curabitur id tincidunt odio. Praesent sagittis velit in nisl suscipit convallis. Maecenas pulvinar, libero et ullamcorper fringilla, purus mauris tincidunt orci, et sodales ex est at eros. Etiam et efficitur erat, in porta tellus. Vestibulum at magna quis risus interdum finibus. Morbi metus nibh, scelerisque vitae magna eget, fringilla accumsan odio. Vivamus accumsan sollicitudin nisl ac mattis. Cras in enim turpis. Vestibulum eget ultricies turpis. Aliquam ultrices, orci quis varius lobortis, justo odio bibendum est, non elementum velit nunc et nulla. Sed vulputate, ipsum quis lacinia hendrerit, justo tellus efficitur elit, a ornare odio massa sit amet dui. Duis neque erat, mollis quis nisl vitae, semper varius lorem.
    </p>
    <p>
      Aliquam tortor libero, volutpat eu dui eget, mattis bibendum lacus. Etiam maximus eleifend auctor. Mauris blandit posuere risus consequat lacinia. Etiam nec iaculis dolor, ac euismod lacus. Donec maximus in tellus ut dictum. Integer suscipit accumsan ipsum non auctor. Nulla dignissim tellus augue, nec placerat dolor aliquam quis. Suspendisse efficitur tortor ac bibendum interdum.
    </p>

  </div>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
      msg: 'Profile',
    };
  },
};
</script>

<style>

</style>
