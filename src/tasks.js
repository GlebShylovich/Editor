export const tasks = [
    {
      id: 1,
      description: "Выведи сумму чисел 5 + 10 в консоль.",
      validation: (code) => {
        let isCorrect = false;
        try {
          if (code.includes(5) && code.includes(10) && code.includes('+')) {
            const result = eval(code.replace('console.log', ''));
            isCorrect = result === 15;
          }
        } catch (error) {
          isCorrect = false;
        }
        return isCorrect;
      },
    },
    {
      id: 2,
      description: "Выведите разницу чисел 15 - 2 в консоль.",
      validation: (code) => {
        let isCorrect = false;
        try {
          if (code.includes('15') && code.includes('2') && code.includes('-')) {
            const result = eval(code.replace('console.log', ''));
            isCorrect = result === 13;
          }
        } catch (error) {
          isCorrect = false;
        }
        return isCorrect;
      },
    },
  ];