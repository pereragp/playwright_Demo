Feature: Checkout Process

  Scenario: User checks out after being redirected to login
    Given the user has added a product to the cart
    When the user navigates to the cart and attempts to checkout
    Then the user should be redirected to the login page
    When the user logs in with valid credentials
    And the user returns to the cart and clicks checkout
    Then the user should reach the checkout page successfully