function carFactory(order) {
  let objParts = {
    model: order.model,
    engine: {},
    carriage: {
      type: order.carriage,
      color: order.color,
    },
    wheels: order.wheelsize,
  };

  if (order.power <= 90) {
    objParts.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (order.power <= 120) {
    objParts.engine = {
      power: 120,
      volume: 2400,
    };
  } else if (order.power <= 200) {
    objParts.engine = {
      power: 200,
      volume: 3500,
    };
  }

  if (order.wheelsize % 2 === 0) {
    order.wheelsize--;
  }

  objParts.wheels = [
    order.wheelsize,
    order.wheelsize,
    order.wheelsize,
    order.wheelsize,
  ];

  return objParts;
}

carFactory({
  model: "VW Golf II",

  power: 90,

  color: "blue",

  carriage: "hatchback",

  wheelsize: 14,
});
