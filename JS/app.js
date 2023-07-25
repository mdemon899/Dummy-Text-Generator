//* Creating Dummy Text
let dummyText = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada rhoncus dolor, eget rhoncus justo facilisis vel. Vivamus nec purus ut magna vulputate rutrum. Etiam libero nulla, porta ut accumsan et, dictum vulputate felis. Nunc quam enim, pretium nec neque non, convallis posuere justo. Sed et eleifend ante. Maecenas tempor libero mauris, vel pharetra ante tempus in. Donec consequat bibendum fermentum. Pellentesque lorem massa, tempus eget enim id, dapibus blandit ligula. Phasellus convallis mi eget eros pharetra, vel aliquet orci placerat. Donec mi nunc, porttitor sit amet ultrices quis, ornare et ante. Sed malesuada, erat nec consectetur condimentum, sapien turpis lacinia ex, eget porttitor nibh nisl id ipsum. Nunc lacinia magna at venenatis sollicitudin. Aenean in tortor sed nulla ullamcorper vestibulum sed sed eros. Praesent leo arcu, tincidunt et viverra vitae, commodo quis tellus. Pellentesque bibendum consectetur odio vel bibendum. Suspendisse sed ante a tellus faucibus suscipit vel ac eros.',

  'Nunc fringilla tellus felis, quis pulvinar justo efficitur ac. Curabitur quis magna ut elit pretium tristique. Sed molestie diam eu mauris iaculis finibus. In pulvinar vitae mauris vitae volutpat. Phasellus sit amet risus sapien. Sed pharetra gravida tortor, id eleifend ipsum sodales sed. In ullamcorper augue sit amet nunc tincidunt convallis. Integer accumsan, odio sed consequat tempus, mauris urna hendrerit leo, quis dapibus felis metus sed sem.',

  'Donec congue euismod mi ac cursus. Maecenas quis tempus nisi. Maecenas at dictum lorem. Suspendisse lacus sapien, vestibulum at leo ac, efficitur iaculis metus. In hac habitasse platea dictumst. Aliquam erat volutpat. Cras sodales eleifend hendrerit. Integer eu ex dictum, tempus orci non, pretium magna. Etiam varius lorem mi, nec finibus metus ornare eu. Nullam cursus feugiat felis, ac faucibus nisl laoreet non. Duis sed sem eget ante ullamcorper auctor id non augue. Sed maximus non nulla at tempus. Mauris et elit non arcu vulputate varius. Mauris sit amet nibh vulputate diam tincidunt tempus quis sed lacus. Quisque consequat aliquet enim at pellentesque. In pulvinar, ante quis sagittis congue, augue urna luctus urna, vel dictum nibh mi ut ligula.',

  'Donec viverra sem ex, at accumsan velit mollis a. Duis quam purus, consectetur ac bibendum ut, dignissim non quam. Vivamus commodo mauris eu risus ullamcorper, non rutrum ex condimentum. Curabitur ac risus auctor, aliquet sapien in, tincidunt leo. In eget ipsum at arcu mattis suscipit id sit amet nisi. Nullam tincidunt nec tellus a pellentesque. Nam et lacinia ligula, ut blandit sapien. Cras at posuere purus. Nullam rhoncus libero vel dignissim blandit. Maecenas lobortis ultricies lorem, eget feugiat nibh. Integer a tortor sed felis aliquam pellentesque.',

  'Nulla nunc mi, tincidunt sit amet faucibus vel, finibus et urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque malesuada nunc a magna maximus, eget bibendum est sollicitudin. Quisque eu lobortis tortor. Morbi id feugiat odio. Nam interdum posuere massa et aliquam. Aenean turpis ipsum, consequat luctus congue non, fermentum eu enim. Etiam et ornare nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vitae consequat neque. Quisque nec scelerisque magna. Proin eu felis at nisl tristique rhoncus in eu neque. Vestibulum at magna in erat euismod commodo. Morbi euismod orci sem, ac tincidunt ligula tristique a. Quisque in dui luctus, aliquam urna vitae, porta urna.',

  'Vestibulum ex libero, sagittis a est at, tristique feugiat nisi. Duis faucibus mi malesuada accumsan scelerisque. Maecenas ex nunc, fermentum in nunc placerat, tempus lobortis tortor. Aenean ac massa eu augue pharetra posuere. Etiam feugiat sapien vitae risus facilisis, in volutpat lectus sagittis. Donec gravida maximus justo eu fringilla. Proin tristique in justo in vulputate. Nam et justo arcu. Nunc malesuada consectetur varius. Proin sagittis lacinia magna, eget commodo est venenatis nec. Suspendisse ultricies ornare lacus, eu feugiat libero varius et. Etiam molestie, tortor ac rutrum egestas, odio sapien interdum mi, ut viverra ante ante vel arcu. Maecenas orci tortor, suscipit et arcu in, maximus dignissim mi. Ut sed felis bibendum, faucibus libero quis, viverra tellus. Proin tincidunt ut velit non consectetur.',

  'Curabitur quis ligula eget felis sollicitudin feugiat non sollicitudin dolor. Praesent malesuada pretium massa, ac pharetra tellus rutrum eleifend. Ut in consequat enim. Phasellus efficitur vehicula urna, quis lacinia nibh facilisis ut. Mauris gravida, odio quis ullamcorper lobortis, elit nulla molestie enim, ac iaculis ante arcu a enim. Proin purus ligula, volutpat a varius ac, feugiat tristique nulla. Duis nulla lacus, vestibulum sit amet magna sit amet, aliquam consectetur nisi. Aenean dignissim sed ex sed mollis. Phasellus nunc lectus, finibus vel quam nec, dignissim aliquam purus.',

  'Nam eget est sodales, pharetra orci porttitor, pellentesque nisi. Fusce quis gravida dolor. Phasellus a velit in nisi hendrerit eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam dignissim ut leo et suscipit. Nulla commodo feugiat urna nec condimentum. Nulla id tortor enim. Praesent vitae porta ex. Phasellus in gravida lorem, at blandit arcu. Integer gravida sit amet risus id luctus. Phasellus nunc nunc, ultrices sed ipsum nec, dapibus malesuada lectus. Nunc ornare non mi ac sollicitudin.',

  'Duis vel neque et justo volutpat convallis. Vivamus quam nisl, pellentesque vitae elit at, lobortis tempus nibh. Integer gravida ac lorem et suscipit. Maecenas fringilla pharetra lectus, nec congue dolor aliquet nec. Nullam ornare libero nec scelerisque bibendum. Nam dapibus lorem at ex posuere, in dictum purus convallis. Nullam feugiat sollicitudin erat et venenatis. Sed fringilla sed sem et imperdiet. Ut placerat nulla at velit sollicitudin, ut aliquet quam aliquet. Aenean elementum, tortor vel commodo dignissim, erat eros tempor sem, fringilla volutpat mi ipsum et risus. Sed leo lacus, ultricies sed ante ac, viverra suscipit nulla. Proin sit amet libero nisi. Nunc orci magna, euismod at dignissim id, iaculis sed lectus. Nullam fringilla at lectus at viverra.',

  'Suspendisse neque dui, ullamcorper ac pretium nec, rhoncus id purus. Cras imperdiet pulvinar condimentum. In est sapien, finibus at semper nec, malesuada id mauris. Pellentesque sit amet metus a turpis congue molestie et ac nisi. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis lectus id nisi elementum maximus ut ac tortor. Nam ut diam vitae mauris commodo vulputate mollis eget risus. Sed convallis quis magna vel dictum. Nam id vulputate lacus, sed pellentesque risus.',

  'Maecenas at est eu quam dignissim condimentum quis vitae metus. Nunc mollis consequat dolor. Ut nec erat libero. Etiam id libero sed quam varius feugiat lobortis et odio. Sed non mattis dolor. Quisque luctus congue porta. Morbi in pretium mi. Sed vitae dictum arcu. In quis porttitor lorem. Pellentesque vulputate nisi nec augue tincidunt viverra. Sed euismod maximus vulputate.'
];


//* Selecting Element From DOM
let form = document.getElementById('form');
let amount = document.getElementById('amount');
let result = document.getElementById('result');


//* Adding Event Listner

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = Number(amount.value);
  let randomDummy = Math.floor(Math.random() * dummyText.length);

  //* For empty, negative and greather than 10
  if (isNaN(value) || value <= 0 || value > 10) {
    result.innerHTML = `<p>${dummyText[randomDummy]}</p>`;
  } else {
    let slicedArray = dummyText.slice(0, value);
    let finalArray = slicedArray.map(function (singleDummy) {
      return `<p>${singleDummy}</p>`
    }).join('')

    //* Showing Result
    result.innerHTML = finalArray;
  }
});