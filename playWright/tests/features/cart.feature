Feature: Cart functionality

  Scenario: Add product to cart
    Given the user is on the products page
    When the user clicks add to cart
    Then the cart should contain items