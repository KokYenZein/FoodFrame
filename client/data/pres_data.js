import Category from "../models/category";
import Meal from "../models/meal";

import Ingredient from "../models/ingredient";

export const INGREDIENTS = [
  new Ingredient(
    "Broccoli",
    {
      calories: "35",
      carbohydrates: "6g",
      fat: "0g",
      protein: "2g",
    },
    {
      folate: "60mg",
      potassium: "280mg",
      vitamin_c: "80mg",
      vitamin_k: "100mg",
    },
    80,
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-yF9UYwJrgNppnlKZhxF5TXBF/user-gF7iLMzX0zipkajR5RswoJKk/img-0Fn3MmRuxuXmq1Ul6SyY9761.png?st=2024-05-05T08%3A14%3A10Z&se=2024-05-05T10%3A14%3A10Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-04T21%3A20%3A09Z&ske=2024-05-05T21%3A20%3A09Z&sks=b&skv=2021-08-06&sig=qTUbpHmKAzILqtbuQidw4I7h0Bzmo0%2B6BRczPAoFk6E%3D"
  ),
  new Ingredient(
    "Carrots",
    {
      calories: 35,
      cholesterol: "0mg",
      dietary_fiber: "2g",
      protein: "1g",
      saturated_fat: "0g",
      sodium: "65mg",
      sugars: "5g",
      total_carbohydrates: "8g",
      total_fat: "0g",
      trans_fat: "0g",
    },
    {
      calcium: "2%",
      iron: "2%",
      vitamin_a: "120%",
      vitamin_c: "10%",
    },
    85,
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-yF9UYwJrgNppnlKZhxF5TXBF/user-gF7iLMzX0zipkajR5RswoJKk/img-3GJxTqZcwt7X09MgLZVF6tcf.png?st=2024-05-05T08%3A14%3A24Z&se=2024-05-05T10%3A14%3A24Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-04T21%3A28%3A00Z&ske=2024-05-05T21%3A28%3A00Z&sks=b&skv=2021-08-06&sig=v5M/clwrmFucCxmMQoyvI7/aMCIMFoWFheS2qj1A7VE%3D"
  ),
  new Ingredient(
    "Rotisserie chicken",
    {
      calories: 110,
      cholesterol: 55,
      dietary_fiber: 0,
      monounsaturated_fat: 1.5,
      polyunsaturated_fat: 0.5,
      protein: 17,
      saturated_fat: 1,
      sodium: 430,
      total_carbohydrates: 2,
      total_fat: 3.5,
      total_sugars: 0,
      trans_fat: 0,
    },
    {
      calcium: 0,
      vitamin_d: 0,
    },
    84,
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-yF9UYwJrgNppnlKZhxF5TXBF/user-gF7iLMzX0zipkajR5RswoJKk/img-Nkoy44L4YRmTmMUfBJtlh673.png?st=2024-05-05T08%3A16%3A06Z&se=2024-05-05T10%3A16%3A06Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-05T08%3A53%3A37Z&ske=2024-05-06T08%3A53%3A37Z&sks=b&skv=2021-08-06&sig=TgkBP%2BuicC2%2BUDCEYgWRgZU%2Bjb49P0hrgxUadeBef2A%3D"
  ),
  new Ingredient(
    "Frozen berries",
    {
      calories: 70,
      cholesterol: 0,
      dietary_fiber: 3,
      protein: 1,
      saturated_fat: 0,
      sodium: 0,
      total_carbohydrates: 16,
      total_fat: 0,
      total_sugars: 10,
      trans_fat: 0,
    },
    {
      calcium: 20,
      iron: 1,
      potassium: 120,
      vitamin_d: 0,
    },
    140,
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-yF9UYwJrgNppnlKZhxF5TXBF/user-gF7iLMzX0zipkajR5RswoJKk/img-IxJxasmki9w228F109kx9AOb.png?st=2024-05-05T08%3A13%3A49Z&se=2024-05-05T10%3A13%3A49Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-04T21%3A28%3A03Z&ske=2024-05-05T21%3A28%3A03Z&sks=b&skv=2021-08-06&sig=FNvVNzu9/j1BnOAz4qXXTUca1kMqi5exYagGrIRHCG0%3D"
  ),
  new Ingredient(
    "Cheese",
    {
      calories: 80,
      carbohydrates: 1,
      fat: 6,
      protein: 4,
    },
    {
      calcium: 125,
      iron: 0,
      potassium: 10,
      sodium: 140,
    },
    19,
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-yF9UYwJrgNppnlKZhxF5TXBF/user-gF7iLMzX0zipkajR5RswoJKk/img-JwBxBnhmfYhkIjTXQ4wMdsaW.png?st=2024-05-05T08%3A14%3A32Z&se=2024-05-05T10%3A14%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-04T21%3A19%3A33Z&ske=2024-05-05T21%3A19%3A33Z&sks=b&skv=2021-08-06&sig=oitwmhvWOWMWFjNcRygoHsbJT/JaxbJ0X50%2BJ1AA%2Bjw%3D"
  ),
  new Ingredient(
    "Pasta",
    {
      calories: 360,
      cholesterol: 35,
      dietary_fiber: 3,
      protein: 16,
      saturated_fat: 4,
      sodium: 820,
      total_carbohydrates: 48,
      total_fat: 12,
      total_sugars: 9,
      trans_fat: 0,
    },
    {
      calcium: 120,
      iron: 2,
      potassium: 390,
      vitamin_d: 1,
    },
    283,
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-yF9UYwJrgNppnlKZhxF5TXBF/user-gF7iLMzX0zipkajR5RswoJKk/img-cmcOHkWe2lQim11FiUhnxgDp.png?st=2024-05-05T08%3A16%3A01Z&se=2024-05-05T10%3A16%3A01Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-04T21%3A19%3A01Z&ske=2024-05-05T21%3A19%3A01Z&sks=b&skv=2021-08-06&sig=pjx%2Bj0IjwYeE/iOC1hkiM3wtawGKKF8EFX/zfaB%2B5cg%3D"
  ),
  new Ingredient(
    "Yogurt",
    {
      calories: 360,
      cholesterol: 35,
      dietary_fiber: 3,
      protein: 16,
      saturated_fat: 4,
      sodium: 820,
      total_carbohydrates: 48,
      total_fat: 12,
      total_sugars: 9,
      trans_fat: 0,
    },
    {
      calcium: 120,
      iron: 2,
      potassium: 390,
      vitamin_d: 1,
    },
    170,
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-yF9UYwJrgNppnlKZhxF5TXBF/user-gF7iLMzX0zipkajR5RswoJKk/img-pK3BIa4hY3b4jYWqqpbiqLHW.png?st=2024-05-05T08%3A16%3A02Z&se=2024-05-05T10%3A16%3A02Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-04T21%3A31%3A33Z&ske=2024-05-05T21%3A31%3A33Z&sks=b&skv=2021-08-06&sig=fodO8AmNGxOShNaPzxocc%2BgTNvzYu1jgcayN26sDaBg%3D"
    ),
];
